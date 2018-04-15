System.register(["core/dom/DomUtilities"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DomUtilities_1, GameImageDivElement;
    return {
        setters: [
            function (DomUtilities_1_1) {
                DomUtilities_1 = DomUtilities_1_1;
            }
        ],
        execute: function () {
            GameImageDivElement = class GameImageDivElement {
                static create(game) {
                    const imgUrl = `http://royal1.midasplayer.com/images/games/${game.short}/${game.short}_170x80.gif`;
                    const gameImgNode = DomUtilities_1.createElement(DomUtilities_1.ElementType.DIV, undefined, ['clickable', 'game__image', 'display-center'], [
                        { name: 'style', value: `background-image: url(${imgUrl})` },
                        { name: 'width', value: '100%' }
                    ], [{ name: 'short', value: game.short }]);
                    return gameImgNode;
                }
                static getGameShortName(gameImageElement) {
                    return DomUtilities_1.getDataFromElement(gameImageElement, 'short');
                }
            };
            exports_1("GameImageDivElement", GameImageDivElement);
        }
    };
});
//# sourceMappingURL=GameImageDivElement.js.map