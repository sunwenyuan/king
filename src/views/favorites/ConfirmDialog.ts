import { Game } from 'core/datamodel/Game';
import { getElementById } from 'core/dom/DomUtilities';
import { FavoriteGames } from 'core/datamodel/FavoriteGames';
import { GameDivElement } from 'core/dom/elements/GameDivElement';

function getConfirmDialogElement(): HTMLDivElement {
    return <HTMLDivElement>getElementById('confirm-dialog');
}

function getConfirmDialogMessageElement(): HTMLDivElement {
    return <HTMLDivElement>getElementById('confirm-dialog-message');
}

function getConfirmDialogYesButtonElement(): HTMLButtonElement {
    return <HTMLButtonElement>getElementById('confirm-dialog-yes-btn')
}

function getConfirmDialogNoButtonElement(): HTMLButtonElement {
    return <HTMLButtonElement>getElementById('confirm-dialog-no-btn')
}

/**
 * A static class to manipulate confirm dialog in current web page.
 * The use case is when user want to remove a game from his favorite,
 * a confirm dialog will pop up to confirm with user that he do want to remove it.
 * 
 * @export
 * @class ConfirmDialog
 */
export class ConfirmDialog {
    private static game: Game;

    /**
     * Show confirm dialog.
     * Update display text with game's name.
     * Also save the game user want to remove from his favorite.
     * 
     * @static
     * @param {Game} game 
     * @memberof ConfirmDialog
     */
    public static showConfirmDialog(game: Game) {
        this.game = game;

        const confirmDialogElement = getConfirmDialogElement();
        getConfirmDialogMessageElement().textContent = `Remove ${game.name} from your collection?`;

        confirmDialogElement.classList.add('open');
    }

    /**
     * Hide confirm dialog.
     * 
     * @static
     * @memberof ConfirmDialog
     */
    public static hideConfirmDialog() {
        const confirmDialogElement = getConfirmDialogElement();
        confirmDialogElement.classList.remove('open');
    }

    /**
     * Add click event listeners to yes button and no button.
     * 
     * @static
     * @memberof ConfirmDialog
     */
    public static addListeners() {
        this.addYesButtonClickListener();
        this.addNoButtonClickListener();
    }

    /**
     * Click event listener for yes button.
     * When yes button is clicked some operation should be performed:
     * 1. Remove game from user's favorite.
     * 2. Remove game tile from current web page.
     * 3. Hide confirm dialog.
     * 
     * @private
     * @static
     * @memberof ConfirmDialog
     */
    private static addYesButtonClickListener() {
        const yesButtonElement = getConfirmDialogYesButtonElement();
        yesButtonElement.addEventListener('click', (event) => {
            FavoriteGames.handleFavoriteStatusChange(this.game.short);
            GameDivElement.remove(this.game);
            this.hideConfirmDialog();
        });
    }

    /**
     * Click event listener for no button.
     * When no button is clicked, confirm dialog should be hidden.
     * 
     * @private
     * @static
     * @memberof ConfirmDialog
     */
    private static addNoButtonClickListener() {
        const noButtonElement = getConfirmDialogNoButtonElement();
        noButtonElement.addEventListener('click', (event) => {
            this.hideConfirmDialog();
        });
    }
}