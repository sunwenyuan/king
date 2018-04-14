System.register(["core/dom/DomUtilities", "core/datamodel/FavoriteGames", "core/dom/elements/GameDivElement"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function getConfirmDialogElement() {
        return DomUtilities_1.getElementById('confirm-dialog');
    }
    function getConfirmDialogMessageElement() {
        return DomUtilities_1.getElementById('confirm-dialog-message');
    }
    function getConfirmDialogYesButtonElement() {
        return DomUtilities_1.getElementById('confirm-dialog-yes-btn');
    }
    function getConfirmDialogNoButtonElement() {
        return DomUtilities_1.getElementById('confirm-dialog-no-btn');
    }
    var DomUtilities_1, FavoriteGames_1, GameDivElement_1, ConfirmDialog;
    return {
        setters: [
            function (DomUtilities_1_1) {
                DomUtilities_1 = DomUtilities_1_1;
            },
            function (FavoriteGames_1_1) {
                FavoriteGames_1 = FavoriteGames_1_1;
            },
            function (GameDivElement_1_1) {
                GameDivElement_1 = GameDivElement_1_1;
            }
        ],
        execute: function () {
            ConfirmDialog = class ConfirmDialog {
                static showConfirmDialog(game) {
                    this.game = game;
                    const confirmDialogElement = getConfirmDialogElement();
                    getConfirmDialogMessageElement().textContent = `Remove ${game.name} from your collection?`;
                    confirmDialogElement.classList.add('open');
                }
                static hideConfirmDialog() {
                    const confirmDialogElement = getConfirmDialogElement();
                    confirmDialogElement.classList.remove('open');
                }
                static addListeners() {
                    this.addYesButtonClickListener();
                    this.addNoButtonClickListener();
                }
                static addYesButtonClickListener() {
                    const yesButtonElement = getConfirmDialogYesButtonElement();
                    yesButtonElement.addEventListener('click', (event) => {
                        FavoriteGames_1.FavoriteGames.handleFavoriteStatusChange(this.game.short);
                        GameDivElement_1.GameDivElement.remove(this.game);
                        this.hideConfirmDialog();
                    });
                }
                static addNoButtonClickListener() {
                    const noButtonElement = getConfirmDialogNoButtonElement();
                    noButtonElement.addEventListener('click', (event) => {
                        this.hideConfirmDialog();
                    });
                }
            };
            exports_1("ConfirmDialog", ConfirmDialog);
        }
    };
});
//# sourceMappingURL=ConfirmDialog.js.map