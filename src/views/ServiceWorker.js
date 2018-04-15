var CACHE_NAME = "king-cache";

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.open(CACHE_NAME).then(function (cache) {
            if(event.request.url.match(/localhost/i) || event.request.url.match(/royal1.midasplayer.com/i)) {
                return cache.match(event.request).then(function (response) {
                    return response || fetch(event.request).then(function (response) {
                        cache.put(event.request, response.clone());
                        return response;
                    });
                });
            }
            else {
                return fetch(event.request).then(function (response) {
                    return response;
                });
            }
        })
    );
});