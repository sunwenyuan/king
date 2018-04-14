System.register(["core/dom/DomUtilities"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DomUtilities_1, GameDivElement;
    return {
        setters: [
            function (DomUtilities_1_1) {
                DomUtilities_1 = DomUtilities_1_1;
            }
        ],
        execute: function () {
            GameDivElement = class GameDivElement {
                static create(game) {
                    const gameDivElement = DomUtilities_1.createElement(DomUtilities_1.ElementType.DIV, game.short, ['game'], [], [{
                            name: 'short',
                            value: game.short
                        }]);
                    return gameDivElement;
                }
                static remove(game) {
                    const gameDivElement = DomUtilities_1.getElementById(game.short);
                    if (gameDivElement) {
                        gameDivElement.remove();
                    }
                }
                static removeAll() {
                    Array.from(DomUtilities_1.getElementListByClassName('game')).forEach(element => {
                        element.remove();
                    });
                }
                static getRenderedGameNumber() {
                    return DomUtilities_1.getElementListByClassName('game').length;
                }
            };
            exports_1("GameDivElement", GameDivElement);
        }
    };
});
//# sourceMappingURL=GameDivElement.js.map