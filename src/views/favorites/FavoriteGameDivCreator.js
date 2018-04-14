System.register(["tslib", "core/dom/elements/GameImageDivElement", "core/dom/elements/GameNameDivElement", "core/dom/elements/HeartIconElement", "core/dom/elements/GameDivElement", "core/dom/elements/GameInfoDivElement", "core/dom/elements/GameOperationsDivElement", "core/actions/GetGamesAction", "core/dom/elements/PlayIconElement", "./ConfirmDialog"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function gameImgElementClickHandler(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // event.stopPropagation();
            const short = GameImageDivElement_1.GameImageDivElement.getGameShortName(event.target);
            const games = yield new GetGamesAction_1.GetGamesAction().perform([short]);
            if (games.length === 1) {
                alert(`Game url: ${games[0].url}`);
            }
        });
    }
    function heartIconElementClickHandler(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            event.stopPropagation();
            const short = HeartIconElement_1.HeartIconElement.getGameShortName(event.target);
            const games = yield new GetGamesAction_1.GetGamesAction().perform([short]);
            if (games.length === 1) {
                ConfirmDialog_1.ConfirmDialog.showConfirmDialog(games[0]);
            }
        });
    }
    var tslib_1, GameImageDivElement_1, GameNameDivElement_1, HeartIconElement_1, GameDivElement_1, GameInfoDivElement_1, GameOperationsDivElement_1, GetGamesAction_1, PlayIconElement_1, ConfirmDialog_1, FavoriteGameDivCreator;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
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
            function (GetGamesAction_1_1) {
                GetGamesAction_1 = GetGamesAction_1_1;
            },
            function (PlayIconElement_1_1) {
                PlayIconElement_1 = PlayIconElement_1_1;
            },
            function (ConfirmDialog_1_1) {
                ConfirmDialog_1 = ConfirmDialog_1_1;
            }
        ],
        execute: function () {
            FavoriteGameDivCreator = class FavoriteGameDivCreator {
                static create(game) {
                    const gameDivElement = GameDivElement_1.GameDivElement.create(game);
                    // Create game image element
                    const gameImgElement = GameImageDivElement_1.GameImageDivElement.create(game);
                    gameImgElement.addEventListener('click', gameImgElementClickHandler);
                    const playIconelement = PlayIconElement_1.PlayIconElement.create(game);
                    gameImgElement.appendChild(playIconelement);
                    // Create game info div.
                    // This div will hold game name, play icon and heart icon
                    const gameInfoElement = GameInfoDivElement_1.GameInfoDivElement.create();
                    const gameNameDiv = GameNameDivElement_1.GameNameDivElement.create(game);
                    const gameOperationsDivElement = GameOperationsDivElement_1.GameOperationsDivElement.create();
                    const heartIconElement = HeartIconElement_1.HeartIconElement.create(game);
                    heartIconElement.addEventListener('click', heartIconElementClickHandler);
                    gameOperationsDivElement.appendChild(heartIconElement);
                    gameInfoElement.appendChild(gameNameDiv);
                    gameInfoElement.appendChild(gameOperationsDivElement);
                    // Append image and info
                    gameDivElement.appendChild(gameImgElement);
                    gameDivElement.appendChild(gameInfoElement);
                    return gameDivElement;
                }
            };
            exports_1("FavoriteGameDivCreator", FavoriteGameDivCreator);
        }
    };
});
//# sourceMappingURL=FavoriteGameDivCreator.js.map