const CACHE_NAME = 'ivrone-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/src/main.jsx',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/style.css' // আপনার CSS ফাইলের পাথ এখানে যুক্ত করুন
];

// ক্যাশিং ইনস্টলেশন
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// ফেচ ইভেন্ট হ্যান্ডলার
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // ক্যাশে পাওয়া গেলে তা ব্যবহার করুন
        return response || fetch(event.request);
      })
  );
});

// অ্যাপ আপডেট করার সময় ক্যাশে সাফ করা
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
