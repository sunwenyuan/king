System.register(["core/dom/DomUtilities"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DomUtilities_1, SearchInputMonitor;
    return {
        setters: [
            function (DomUtilities_1_1) {
                DomUtilities_1 = DomUtilities_1_1;
            }
        ],
        execute: function () {
            SearchInputMonitor = class SearchInputMonitor {
                static start(callback) {
                    this.getSearchInputElement().addEventListener('keyup', (event) => {
                        if (this.timeoutId) {
                            clearTimeout(this.timeoutId);
                            this.timeoutId = undefined;
                        }
                        this.timeoutId = setTimeout(() => {
                            this.searchStr = this.getSearchInputElement().value;
                            callback();
                        }, 300);
                    });
                }
                static getSearchStr() {
                    return this.searchStr;
                }
                static getSearchInputElement() {
                    return DomUtilities_1.getElementById('search-input');
                }
            };
            exports_1("SearchInputMonitor", SearchInputMonitor);
        }
    };
});
//# sourceMappingURL=SearchInputMonitor.js.map