System.register(["core/dom/DomUtilities"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DomUtilities_1, GameNameDivElement;
    return {
        setters: [
            function (DomUtilities_1_1) {
                DomUtilities_1 = DomUtilities_1_1;
            }
        ],
        execute: function () {
            GameNameDivElement = class GameNameDivElement {
                static create(game) {
                    const gameNameDiv = DomUtilities_1.createElement(DomUtilities_1.ElementType.DIV, undefined, ['game__info__name']);
                    gameNameDiv.appendChild(DomUtilities_1.createTextSpanElement(game.name));
                    return gameNameDiv;
                }
            };
            exports_1("GameNameDivElement", GameNameDivElement);
        }
    };
});
//# sourceMappingURL=GameNameDivElement.js.map