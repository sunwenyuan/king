System.register(["core/dom/DomUtilities"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DomUtilities_1, GameOperationsDivElement;
    return {
        setters: [
            function (DomUtilities_1_1) {
                DomUtilities_1 = DomUtilities_1_1;
            }
        ],
        execute: function () {
            GameOperationsDivElement = class GameOperationsDivElement {
                static create() {
                    return DomUtilities_1.createElement(DomUtilities_1.ElementType.DIV, undefined, ['game__info__operations', 'display-center']);
                }
            };
            exports_1("GameOperationsDivElement", GameOperationsDivElement);
        }
    };
});
//# sourceMappingURL=GameOperationsDivElement.js.map