// Service Worker para caché offline de la Biblia Libre
const CACHE_NAME = 'biblia-vbl-v6.0.27';
const BIBLE_DATA_CACHE = 'biblia-data-v2';

const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/offline.html',
    '/manifest.json',
    // '/version.json', // Removido para evitar cacheo agresivo en install
    '/biblia_vbl.json'
];

// Evento de Instalación
self.addEventListener('install', (event) => {
    console.log('[SW] Instalando Service Worker...');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[SW] Cacheando archivos estáticos');
            return cache.addAll(STATIC_ASSETS);
        })
    );
    self.skipWaiting();
});

// Evento de Activación
self.addEventListener('activate', (event) => {
    console.log('[SW] Activando Service Worker...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME && cacheName !== BIBLE_DATA_CACHE) {
                        console.log('[SW] Borrando caché antiguo:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    return self.clients.claim();
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

    // Estrategia para Videos: NETWORK ONLY (No cachear)
    if (url.pathname.endsWith('.mp4') || request.destination === 'video') {
        return; // Dejar que el navegador maneje la petición (Network Only)
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

    // Estrategia especial para DATOS DE BIBLIA (biblia_vbl.json)
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
        // Forzar caché de biblia_vbl.json
        caches.open(BIBLE_DATA_CACHE).then((cache) => {
            cache.add('./biblia_vbl.json').then(() => {
                console.log('[SW] biblia_vbl.json cacheado manualmente');
                event.ports[0].postMessage({ success: true });
            }).catch((error) => {
                console.error('[SW] Error cacheando biblia_vbl.json:', error);
                event.ports[0].postMessage({ success: false, error: error.message });
            });
        });
    }
});
// --- Firebase Cloud Messaging (Background) ---
importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDHP4fAVI_BNfCyg0UT1h04n9bVTEkV4Dc",
    authDomain: "bibliarv1909-app.firebaseapp.com",
    projectId: "bibliarv1909-app",
    storageBucket: "bibliarv1909-app.firebasestorage.app",
    messagingSenderId: "291224466196",
    appId: "1:291224466196:web:b6592044dcbcabfc944801",
    measurementId: "G-7QM9SY6E27"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Mensaje en segundo plano recibido:', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/icon-192.png', // Asegúrate de tener este icono
        badge: '/icon-192.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
