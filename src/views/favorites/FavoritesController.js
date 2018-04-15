System.register(["tslib", "core/dom/DomUtilities", "core/actions/GetGamesAction", "core/actions/GetFavoriteGamesAction", "core/datamodel/FavoriteGames", "./FavoriteGameDivCreator", "./ConfirmDialog", "core/dom/ScrollToBottomDetector", "core/dom/elements/GameDivElement", "core/dom/SearchInputMonitor", "core/ServiceWorker"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function loadGames() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const startIndex = GameDivElement_1.GameDivElement.getRenderedGameNumber();
            const games = yield new GetGamesAction_1.GetGamesAction(startIndex, SearchInputMonitor_1.SearchInputMonitor.getSearchStr()).perform(FavoriteGames_1.FavoriteGames.getFavorites());
            const gameGalleryDivElement = DomUtilities_1.getElementById(GamesGalleryDivId);
            games.forEach(game => {
                const gameNode = FavoriteGameDivCreator_1.FavoriteGameDivCreator.create(game);
                gameGalleryDivElement.appendChild(gameNode);
            });
            ScrollToBottomDetector_1.ScrollToBottomDetector.resetIsBottom();
        });
    }
    function searchInputChangeHandler(searchStr) {
        GameDivElement_1.GameDivElement.removeAll();
        loadGames();
    }
    function setup() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            ServiceWorker_1.registServiceWorker();
            ScrollToBottomDetector_1.ScrollToBottomDetector.start(loadGames);
            ConfirmDialog_1.ConfirmDialog.addListeners();
            SearchInputMonitor_1.SearchInputMonitor.start(searchInputChangeHandler);
            const favorites = yield new GetFavoriteGamesAction_1.GetFavoriteGamesAction().perform();
            FavoriteGames_1.FavoriteGames.setFavorites(favorites);
            yield loadGames();
        });
    }
    exports_1("setup", setup);
    var tslib_1, DomUtilities_1, GetGamesAction_1, GetFavoriteGamesAction_1, FavoriteGames_1, FavoriteGameDivCreator_1, ConfirmDialog_1, ScrollToBottomDetector_1, GameDivElement_1, SearchInputMonitor_1, ServiceWorker_1, GamesGalleryDivId;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (DomUtilities_1_1) {
                DomUtilities_1 = DomUtilities_1_1;
            },
            function (GetGamesAction_1_1) {
                GetGamesAction_1 = GetGamesAction_1_1;
            },
            function (GetFavoriteGamesAction_1_1) {
                GetFavoriteGamesAction_1 = GetFavoriteGamesAction_1_1;
            },
            function (FavoriteGames_1_1) {
                FavoriteGames_1 = FavoriteGames_1_1;
            },
            function (FavoriteGameDivCreator_1_1) {
                FavoriteGameDivCreator_1 = FavoriteGameDivCreator_1_1;
            },
            function (ConfirmDialog_1_1) {
                ConfirmDialog_1 = ConfirmDialog_1_1;
            },
            function (ScrollToBottomDetector_1_1) {
                ScrollToBottomDetector_1 = ScrollToBottomDetector_1_1;
            },
            function (GameDivElement_1_1) {
                GameDivElement_1 = GameDivElement_1_1;
            },
            function (SearchInputMonitor_1_1) {
                SearchInputMonitor_1 = SearchInputMonitor_1_1;
            },
            function (ServiceWorker_1_1) {
                ServiceWorker_1 = ServiceWorker_1_1;
            }
        ],
        execute: function () {
            GamesGalleryDivId = 'games-gallery-container';
        }
    };
});
//# sourceMappingURL=FavoritesController.js.map