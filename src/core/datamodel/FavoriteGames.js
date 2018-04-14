System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FavoriteGames;
    return {
        setters: [],
        execute: function () {
            FavoriteGames = class FavoriteGames {
                static setFavorites(favorites) {
                    this.favorites = favorites;
                }
                static getFavorites() {
                    return this.favorites;
                }
                static isFavorite(short) {
                    return this.favorites.find(item => item === short) !== undefined;
                }
                static handleFavoriteStatusChange(short) {
                    if (this.isFavorite(short)) {
                        this.favorites = this.favorites.filter(item => item !== short);
                    }
                    else {
                        this.favorites = [...this.favorites, short];
                    }
                }
            };
            FavoriteGames.favorites = [];
            exports_1("FavoriteGames", FavoriteGames);
        }
    };
});
//# sourceMappingURL=FavoriteGames.js.map