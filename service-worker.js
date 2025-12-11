// Service Worker para PWA - Biblia RV 1909
// Versión: 1.0.0

const CACHE_NAME = 'bibliarv1909-v1';
const STATIC_CACHE = 'static-v1';
const AUDIO_CACHE = 'audio-v1';

// Archivos estáticos para cachear
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/manifest.json',
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
    console.log('[SW] Installing Service Worker');
    event.waitUntil(
        caches.open(STATIC_CACHE).then((cache) => {
            console.log('[SW] Caching static assets');
            return cache.addAll(STATIC_ASSETS).catch((error) => {
                console.error('[SW] Error caching assets:', error);
            });
        })
    );
    // Activar inmediatamente
    self.skipWaiting();
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating Service Worker');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== STATIC_CACHE && cacheName !== AUDIO_CACHE) {
                        console.log('[SW] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    // Tomar control inmediatamente
    return self.clients.claim();
});

// Interceptar peticiones
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Estrategia para audio (Cache First)
    if (request.url.includes('.m4a') || request.url.includes('.mp3')) {
        event.respondWith(
            caches.match(request).then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                return fetch(request).then((response) => {
                    // No cachear en Service Worker, IndexedDB lo maneja
                    return response;
                });
            })
        );
        return;
    }

    // Estrategia para API RSS2JSON (Network First)
    if (request.url.includes('rss2json.com')) {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    // Clonar la respuesta para cachear
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(request, responseClone);
                    });
                    return response;
                })
                .catch(() => {
                    // Si falla, intentar desde cache
                    return caches.match(request);
                })
        );
        return;
    }

    // Estrategia por defecto: Network First, fallback a Cache
    event.respondWith(
        fetch(request)
            .then((response) => {
                // Solo cachear respuestas exitosas
                if (response.status === 200) {
                    const responseClone = response.clone();
                    caches.open(STATIC_CACHE).then((cache) => {
                        cache.put(request, responseClone);
                    });
                }
                return response;
            })
            .catch(() => {
                // Si falla la red, usar cache
                return caches.match(request).then((cachedResponse) => {
                    return cachedResponse || new Response('Offline - Recurso no disponible');
                });
            })
    );
});

// Sincronización en background (opcional, para futuras mejoras)
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-podcasts') {
        event.waitUntil(syncPodcasts());
    }
});

// Función de sincronización (placeholder)
async function syncPodcasts() {
    console.log('[SW] Syncing podcasts in background');
    // Aquí se podría actualizar el feed en background
}

// Notificaciones (opcional, para futuras mejoras)
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/')
    );
});
