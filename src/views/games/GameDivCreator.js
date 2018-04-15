System.register(["tslib", "core/datamodel/FavoriteGames", "core/dom/elements/GameImageDivElement", "core/dom/elements/GameNameDivElement", "core/dom/elements/HeartIconElement", "core/dom/elements/GameDivElement", "core/dom/elements/GameInfoDivElement", "core/dom/elements/GameOperationsDivElement", "./Overlay", "core/actions/GetGamesAction", "core/dom/elements/PlayIconElement"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function gameImgElementClickHandler(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            event.stopPropagation();
            const short = GameImageDivElement_1.GameImageDivElement.getGameShortName(event.target);
            const games = yield new GetGamesAction_1.GetGamesAction().perform([short]);
            if (games.length === 1) {
                Overlay_1.Overlay.showOverlay(games[0]);
            }
        });
    }
    function playIconElementClickHandler(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const playIconElement = event.target;
            const short = PlayIconElement_1.PlayIconElement.getGameShortName(playIconElement);
            const games = yield new GetGamesAction_1.GetGamesAction().perform([short]);
            if (games.length === 1) {
                alert(`Game url: ${games[0].url}`);
            }
        });
    }
    var tslib_1, FavoriteGames_1, GameImageDivElement_1, GameNameDivElement_1, HeartIconElement_1, GameDivElement_1, GameInfoDivElement_1, GameOperationsDivElement_1, Overlay_1, GetGamesAction_1, PlayIconElement_1, GameDivCreator;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (FavoriteGames_1_1) {
                FavoriteGames_1 = FavoriteGames_1_1;
            },
            function (GameImageDivElement_1_1) {
                GameImageDivElement_1 = GameImageDivElement_1_1;
            },
            function (GameNameDivElement_1_1) {
                GameNameDivElement_1 = GameNameDivElement_1_1;
            },
            function (HeartIconElement_1_1) {
                HeartIconElement_1 = HeartIconElement_1_1;
            },
            function (GameDivElement_1_1) {
                GameDivElement_1 = GameDivElement_1_1;
            },
            function (GameInfoDivElement_1_1) {
                GameInfoDivElement_1 = GameInfoDivElement_1_1;
            },
            function (GameOperationsDivElement_1_1) {
                GameOperationsDivElement_1 = GameOperationsDivElement_1_1;
            },
            function (Overlay_1_1) {
                Overlay_1 = Overlay_1_1;
            },
            function (GetGamesAction_1_1) {
                GetGamesAction_1 = GetGamesAction_1_1;
            },
            function (PlayIconElement_1_1) {
                PlayIconElement_1 = PlayIconElement_1_1;
            }
        ],
        execute: function () {
            GameDivCreator = class GameDivCreator {
                static create(game) {
                    const gameDivElement = GameDivElement_1.GameDivElement.create(game);
                    const gameImgElement = GameImageDivElement_1.GameImageDivElement.create(game);
                    gameImgElement.addEventListener('click', gameImgElementClickHandler);
                    const gameInfoElement = GameInfoDivElement_1.GameInfoDivElement.create();
                    const gameNameDiv = GameNameDivElement_1.GameNameDivElement.create(game);
                    const gameOperationsDivElement = GameOperationsDivElement_1.GameOperationsDivElement.create();
                    const playIconElement = PlayIconElement_1.PlayIconElement.create(game);
                    playIconElement.addEventListener('click', playIconElementClickHandler);
                    const heartIconElement = HeartIconElement_1.HeartIconElement.create(game);
                    heartIconElement.addEventListener('click', function (event) {
                        const heartIconElement = event.target;
                        const short = HeartIconElement_1.HeartIconElement.getGameShortName(heartIconElement);
                        FavoriteGames_1.FavoriteGames.handleFavoriteStatusChange(short);
                        HeartIconElement_1.HeartIconElement.updateHeartStatus(short, heartIconElement);
                    });
                    gameOperationsDivElement.appendChild(playIconElement);
                    gameOperationsDivElement.appendChild(heartIconElement);
                    gameInfoElement.appendChild(gameNameDiv);
                    gameInfoElement.appendChild(gameOperationsDivElement);
                    gameDivElement.appendChild(gameImgElement);
                    gameDivElement.appendChild(gameInfoElement);
                    return gameDivElement;
                }
            };
            exports_1("GameDivCreator", GameDivCreator);
        }
    };
});
//# sourceMappingURL=GameDivCreator.js.map