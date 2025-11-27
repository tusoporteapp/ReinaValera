// Service Worker para caché offline de la Biblia
// Service Worker para caché offline de la Biblia
const CACHE_NAME = 'biblia-rv1909-v1.3.0';
const BIBLE_DATA_CACHE = 'biblia-data-v2';

// Archivos estáticos que siempre se deben cachear
const STATIC_ASSETS = [
    './',
    './index.html',
    './version.json'
];

// ... (install event igual) ...

// Fetch: Estrategia Cache-First para archivos estáticos y Network-First para datos
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Ignorar requests que no sean GET
    if (request.method !== 'GET') {
        return;
    }

    // Ignorar requests a otros dominios, EXCEPTO videos
    if (url.origin !== location.origin) {
        // Permitir interceptar videos mp4 para servirlos desde caché
        if (!(url.pathname.endsWith('.mp4') || request.destination === 'video')) {
            return;
        }
    }

    // Estrategia para Videos (Cache-First)
    if (url.pathname.endsWith('.mp4') || request.destination === 'video') {
        // ... (igual) ...
        const VIDEO_CACHE_NAME = 'bible-app-video-cache-v1';
        event.respondWith(
            caches.open(VIDEO_CACHE_NAME).then(cache => {
                return cache.match(request, { ignoreSearch: true }).then(response => {
                    if (response) return response;
                    return fetch(request);
                });
            })
        );
        return;
    }

    // Estrategia Cache-First para archivos estáticos
    if (url.pathname.endsWith('.js') ||
        url.pathname.endsWith('.css') ||
        url.pathname.endsWith('.html') ||
        url.pathname.endsWith('.png') ||
        url.pathname.endsWith('.jpg') ||
        url.pathname.endsWith('.svg')) {

        event.respondWith(
            caches.match(request).then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                return fetch(request).then((response) => {
                    if (response && response.status === 200) {
                        const responseClone = response.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(request, responseClone);
                        });
                    }
                    return response;
                });
            })
        );
        return;
    }

    // Estrategia especial para DATOS DE BIBLIA (biblia.json y biblia_vbl.json)
    // Cache-First con actualización en segundo plano (Stale-While-Revalidate)
    if (url.pathname.includes('biblia') && url.pathname.endsWith('.json')) {
        event.respondWith(
            caches.open(BIBLE_DATA_CACHE).then((cache) => {
                return cache.match(request).then((cachedResponse) => {
                    const fetchPromise = fetch(request).then((networkResponse) => {
                        // Actualizar caché en segundo plano
                        if (networkResponse && networkResponse.status === 200) {
                            cache.put(request, networkResponse.clone());
                            console.log(`[SW] ${url.pathname} actualizado en caché`);
                        }
                        return networkResponse;
                    }).catch(() => {
                        console.log(`[SW] Offline: usando caché de ${url.pathname}`);
                        return cachedResponse;
                    });

                    // Si hay caché, devolverlo inmediatamente
                    if (cachedResponse) {
                        return cachedResponse;
                    }

                    // Si no hay caché, esperar la red
                    return fetchPromise;
                });
            })
        );
        return;
    }

    // Estrategia Network-First para version.json (siempre intentar red primero)
    if (url.pathname.includes('version.json')) {
        event.respondWith(
            fetch(request).then((response) => {
                if (response && response.status === 200) {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(request, responseClone);
                    });
                }
                return response;
            }).catch(() => {
                console.log('[SW] No hay conexión, usando caché de version.json');
                return caches.match(request);
            })
        );
        return;
    }

    // Para todo lo demás, Network-First con fallback a caché
    event.respondWith(
        fetch(request).then((response) => {
            if (response && response.status === 200) {
                const responseClone = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(request, responseClone);
                });
            }
            return response;
        }).catch(() => {
            return caches.match(request);
        })
    );
});

// Mensaje desde el cliente
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }

    if (event.data && event.data.type === 'CACHE_BIBLE') {
        // Forzar caché de biblia.json
        caches.open(BIBLE_DATA_CACHE).then((cache) => {
            cache.add('./biblia.json').then(() => {
                console.log('[SW] biblia.json cacheado manualmente');
                event.ports[0].postMessage({ success: true });
            }).catch((error) => {
                console.error('[SW] Error cacheando biblia.json:', error);
                event.ports[0].postMessage({ success: false, error: error.message });
            });
        });
    }
});
