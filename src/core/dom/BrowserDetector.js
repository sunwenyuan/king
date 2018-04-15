System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BrowserDetector;
    return {
        setters: [],
        execute: function () {
            BrowserDetector = class BrowserDetector {
                static isSafari() {
                    return this.getBrowserName() === 'Safari';
                }
                static getBrowserName() {
                    if (this.browserName === undefined) {
                        const userAgent = window.navigator.userAgent;
                        let browserName = 'other';
                        if (userAgent.match(/OPR/i) || userAgent.match(/Opera/i)) {
                            browserName = 'Opera';
                        }
                        else if (userAgent.match(/MSIE/i) || userAgent.match(/Trident/i)) {
                            browserName = 'Internet Explorer';
                        }
                        else if (userAgent.match(/firefox/i) && userAgent.match(/seamonkey/i) === null) {
                            browserName = 'Firefox';
                        }
                        else if (userAgent.match(/Safari/i) && userAgent.match(/Chrome/i) === null && userAgent.match(/Chromium/i) === null) {
                            browserName = 'Safari';
                        }
                        else if (userAgent.match(/Chrome/i) && userAgent.match(/Chromium/i) === null) {
                            browserName = 'Chrome';
                        }
                        else if (userAgent.match(/Chromium/i)) {
                            browserName = 'Chromium';
                        }
                        this.browserName = browserName;
                    }
                    return this.browserName;
                }
            };
            exports_1("BrowserDetector", BrowserDetector);
        }
    };
});
//# sourceMappingURL=BrowserDetector.js.map