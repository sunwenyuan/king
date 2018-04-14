System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ScrollToBottomDetector;
    return {
        setters: [],
        execute: function () {
            ScrollToBottomDetector = class ScrollToBottomDetector {
                static start(callback) {
                    window.addEventListener('scroll', (event) => {
                        if (document.body.scrollHeight - document.documentElement.scrollTop === document.body.clientHeight) {
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