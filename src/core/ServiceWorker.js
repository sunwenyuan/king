System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function registServiceWorker() {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("../ServiceWorker.js", { scope: '/views/' })
                .then(function (registration) {
                console.log("Service Worker registered with scope:", registration.scope);
            }).catch(function (err) {
                console.log("Service worker registration failed:", err);
            });
        }
    }
    exports_1("registServiceWorker", registServiceWorker);
    return {
        setters: [],
        execute: function () {
        }
    };
});
//# sourceMappingURL=ServiceWorker.js.map