System.register(["tslib"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, GetFavoriteGamesAction;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            }
        ],
        execute: function () {
            GetFavoriteGamesAction = class GetFavoriteGamesAction {
                perform() {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        const favorites = ['eightballpool', 'nineballpool', 'briscolaking', 'chain_reaction', 'croco_loco', 'jelly_swelly', 'letter_swap', 'solitaire_swing'];
                        return Promise.resolve(favorites);
                    });
                }
            };
            exports_1("GetFavoriteGamesAction", GetFavoriteGamesAction);
        }
    };
});
//# sourceMappingURL=GetFavoriteGamesAction.js.map