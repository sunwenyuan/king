System.register(["core/dom/BrowserDetector"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BrowserDetector_1, ScrollToBottomDetector;
    return {
        setters: [
            function (BrowserDetector_1_1) {
                BrowserDetector_1 = BrowserDetector_1_1;
            }
        ],
        execute: function () {
            ScrollToBottomDetector = class ScrollToBottomDetector {
                static start(callback) {
                    window.addEventListener('scroll', (event) => {
                        const scrollHeight = document.body.scrollHeight;
                        const scrollTop = BrowserDetector_1.BrowserDetector.isSafari() ? document.body.scrollTop : document.documentElement.scrollTop;
                        const clientHeight = document.body.clientHeight;
                        if (scrollHeight - scrollTop === clientHeight) {
                            if (!this.isBottom) {
                                this.isBottom = true;
                                callback();
                            }
                        }
                    });
                }
                static resetIsBottom() {
                    this.isBottom = false;
                }
            };
            ScrollToBottomDetector.isBottom = false;
            exports_1("ScrollToBottomDetector", ScrollToBottomDetector);
        }
    };
});
//# sourceMappingURL=ScrollToBottomDetector.js.map