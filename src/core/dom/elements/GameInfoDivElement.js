System.register(["core/dom/DomUtilities"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DomUtilities_1, GameInfoDivElement;
    return {
        setters: [
            function (DomUtilities_1_1) {
                DomUtilities_1 = DomUtilities_1_1;
            }
        ],
        execute: function () {
            GameInfoDivElement = class GameInfoDivElement {
                static create() {
                    return DomUtilities_1.createElement(DomUtilities_1.ElementType.DIV, undefined, ['game__info']);
                }
            };
            exports_1("GameInfoDivElement", GameInfoDivElement);
        }
    };
});
//# sourceMappingURL=GameInfoDivElement.js.map