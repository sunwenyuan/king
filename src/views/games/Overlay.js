System.register(["core/dom/DomUtilities", "core/dom/elements/HeartIconElement", "core/datamodel/FavoriteGames"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function getOverlayElement() {
        return DomUtilities_1.getElementById('overlay');
    }
    function getOverlayScreenImgElement() {
        return DomUtilities_1.getElementById('overlay-screenshot');
    }
    function getOverlayInfobarNameDivElement() {
        return DomUtilities_1.getElementById('overlay-infobar-name');
    }
    function getOverlayHeartIconElement() {
        return DomUtilities_1.getElementById('overlay-heart');
    }
    function getOverlayPlayIconElement() {
        return DomUtilities_1.getElementById('overlay-play');
    }
    var DomUtilities_1, HeartIconElement_1, FavoriteGames_1, CloseButtonId, Overlay;
    return {
        setters: [
            function (DomUtilities_1_1) {
                DomUtilities_1 = DomUtilities_1_1;
            },
            function (HeartIconElement_1_1) {
                HeartIconElement_1 = HeartIconElement_1_1;
            },
            function (FavoriteGames_1_1) {
                FavoriteGames_1 = FavoriteGames_1_1;
            }
        ],
        execute: function () {
            CloseButtonId = 'overlay-close-icon';
            Overlay = class Overlay {
                static showOverlay(game) {
                    this.game = game;
                    const overlayElement = getOverlayElement();
                    const overlayScreenshotImgElement = getOverlayScreenImgElement();
                    const imgUrl = `url(http://royal1.midasplayer.com/images/games/${game.short}/dumps/screen_${game.short}.gif)`;
                    overlayScreenshotImgElement.setAttribute('style', `background-image:${imgUrl}`);
                    getOverlayInfobarNameDivElement().textContent = game.name;
                    const heartIconElement = getOverlayHeartIconElement();
                    HeartIconElement_1.HeartIconElement.updateHeartStatus(game.short, heartIconElement);
                    overlayElement.classList.add('open');
                }
                static hideOverlay() {
                    const overlayElement = getOverlayElement();
                    overlayElement.classList.remove('open');
                }
                static addListeners() {
                    this.addCloseClickListener();
                    this.addHeartClickListener();
                    this.addPlayClickListener();
                }
                static addCloseClickListener() {
                    const closeIconElement = DomUtilities_1.getElementById(CloseButtonId);
                    closeIconElement.addEventListener('click', (event) => {
                        event.stopPropagation();
                        this.hideOverlay();
                    });
                }
                static addHeartClickListener() {
                    const heartIconElement = getOverlayHeartIconElement();
                    heartIconElement.addEventListener('click', (event) => {
                        event.stopPropagation();
                        FavoriteGames_1.FavoriteGames.handleFavoriteStatusChange(this.game.short);
                        HeartIconElement_1.HeartIconElement.updateHeartStatus(this.game.short, heartIconElement);
                        HeartIconElement_1.HeartIconElement.updateHeartStatus(this.game.short, DomUtilities_1.getElementById(`heart-${this.game.short}`));
                    });
                }
                static addPlayClickListener() {
                    const playIconElement = getOverlayPlayIconElement();
                    playIconElement.addEventListener('click', (event) => {
                        event.stopPropagation();
                        alert(`Game url: ${this.game.url}`);
                    });
                }
            };
            exports_1("Overlay", Overlay);
            ;
        }
    };
});
//# sourceMappingURL=Overlay.js.map