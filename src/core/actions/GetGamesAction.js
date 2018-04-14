System.register(["tslib"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, GetGamesAction;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            }
        ],
        execute: function () {
            GetGamesAction = class GetGamesAction {
                constructor(startIndex = 0, searchStr = '') {
                    this.startIndex = startIndex;
                    this.searchStr = searchStr;
                    this.offset = 40;
                }
                perform(shortNames = undefined) {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        const fetchResponse = yield fetch('../../core/actions/games.json');
                        const responseContent = yield fetchResponse.json();
                        let games = responseContent.games;
                        if (shortNames) {
                            games = games.filter(game => shortNames.includes(game.short));
                        }
                        if (this.searchStr !== '') {
                            this.searchStr = this.searchStr.toLowerCase();
                            games = games.filter(game => {
                                return game.name.toLowerCase().includes(this.searchStr)
                                    || game.short.toLowerCase().includes(this.searchStr);
                            });
                        }
                        games = games.slice(this.startIndex, this.offset + this.startIndex);
                        return Promise.resolve(games);
                    });
                }
            };
            exports_1("GetGamesAction", GetGamesAction);
        }
    };
});
//# sourceMappingURL=GetGamesAction.js.map