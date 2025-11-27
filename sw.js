// Service Worker para caché offline de la Biblia
const CACHE_NAME = 'biblia-rv1909-v1.2.0';
const BIBLE_DATA_CACHE = 'biblia-data-v1';

// Archivos estáticos que siempre se deben cachear
const STATIC_ASSETS = [
    './',
    './index.html',
    './biblia.json',
    './version.json'
];

// Instalación: Cachear archivos estáticos
self.addEventListener('install', (event) => {
    console.log('[SW] Instalando Service Worker...');

    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[SW] Cacheando archivos estáticos');
            return cache.addAll(STATIC_ASSETS);
        }).then(() => {
            console.log('[SW] Service Worker instalado correctamente');
            return self.skipWaiting(); // Activar inmediatamente
        }).catch((error) => {
            console.error('[SW] Error al cachear archivos:', error);
        })
    );
});

// Activación: Limpiar cachés antiguos
self.addEventListener('activate', (event) => {
    console.log('[SW] Activando Service Worker...');

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME && cacheName !== BIBLE_DATA_CACHE) {
                        console.log('[SW] Eliminando caché antiguo:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('[SW] Service Worker activado');
            return self.clients.claim(); // Tomar control inmediatamente
        })
    );
});

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
        const VIDEO_CACHE_NAME = 'bible-app-video-cache-v1';
        event.respondWith(
            caches.open(VIDEO_CACHE_NAME).then(cache => {
                return cache.match(request, { ignoreSearch: true }).then(response => {
                    if (response) {
                        console.log('[SW] Sirviendo video desde caché:', url.pathname);
                        return response;
                    }
                    // Si no está en caché, intentar red
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
                    console.log('[SW] Sirviendo desde caché:', url.pathname);
                    return cachedResponse;
                }

                return fetch(request).then((response) => {
                    // Cachear la respuesta para futuras peticiones
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

    // Estrategia especial para biblia.json (Cache-First con actualización en segundo plano)
    if (url.pathname.includes('biblia.json')) {
        event.respondWith(
            caches.open(BIBLE_DATA_CACHE).then((cache) => {
                return cache.match(request).then((cachedResponse) => {
                    const fetchPromise = fetch(request).then((networkResponse) => {
                        // Actualizar caché en segundo plano
                        if (networkResponse && networkResponse.status === 200) {
                            cache.put(request, networkResponse.clone());
                            console.log('[SW] biblia.json actualizado en caché');
                        }
                        return networkResponse;
                    }).catch(() => {
                        console.log('[SW] No hay conexión, usando caché de biblia.json');
                        return cachedResponse;
                    });

                    // Si hay caché, devolverlo inmediatamente
                    if (cachedResponse) {
                        console.log('[SW] Sirviendo biblia.json desde caché');
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
