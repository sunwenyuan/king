System.register(["core/dom/DomUtilities", "core/datamodel/FavoriteGames"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DomUtilities_1, FavoriteGames_1, HeartIconElement;
    return {
        setters: [
            function (DomUtilities_1_1) {
                DomUtilities_1 = DomUtilities_1_1;
            },
            function (FavoriteGames_1_1) {
                FavoriteGames_1 = FavoriteGames_1_1;
            }
        ],
        execute: function () {
            HeartIconElement = class HeartIconElement {
                static create(game) {
                    const heartIconElement = DomUtilities_1.createElement(DomUtilities_1.ElementType.I, `heart-${game.short}`, ['clickable', 'fa-heart'], [], [{ name: 'short', value: game.short }]);
                    if (FavoriteGames_1.FavoriteGames.isFavorite(game.short)) {
                        this.activateHeart(heartIconElement);
                    }
                    else {
                        this.deactivateHeart(heartIconElement);
                    }
                    return heartIconElement;
                }
                static getGameShortName(heartIconElement) {
                    return DomUtilities_1.getDataFromElement(heartIconElement, 'short');
                }
                static updateHeartStatus(short, heartIconElement) {
                    if (FavoriteGames_1.FavoriteGames.isFavorite(short)) {
                        this.activateHeart(heartIconElement);
                    }
                    else {
                        this.deactivateHeart(heartIconElement);
                    }
                }
                static activateHeart(heartIconElement) {
                    heartIconElement.classList.add('heart-active');
                    heartIconElement.classList.add('fas');
                    heartIconElement.classList.remove('far');
                }
                static deactivateHeart(heartIconElement) {
                    heartIconElement.classList.remove('heart-active');
                    heartIconElement.classList.remove('fas');
                    heartIconElement.classList.add('far');
                }
            };
            exports_1("HeartIconElement", HeartIconElement);
        }
    };
});
//# sourceMappingURL=HeartIconElement.js.map