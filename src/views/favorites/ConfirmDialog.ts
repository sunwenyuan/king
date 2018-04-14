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

export class ConfirmDialog {
    private static game: Game;
    public static showConfirmDialog(game: Game) {
        this.game = game;

        const confirmDialogElement = getConfirmDialogElement();
        getConfirmDialogMessageElement().textContent = `Remove ${game.name} from your collection?`;

        confirmDialogElement.classList.add('open');
    }

    public static hideConfirmDialog() {
        const confirmDialogElement = getConfirmDialogElement();
        confirmDialogElement.classList.remove('open');
    }

    public static addListeners() {
        this.addYesButtonClickListener();
        this.addNoButtonClickListener();
    }

    private static addYesButtonClickListener() {
        const yesButtonElement = getConfirmDialogYesButtonElement();
        yesButtonElement.addEventListener('click', (event) => {
            FavoriteGames.handleFavoriteStatusChange(this.game.short);
            GameDivElement.remove(this.game);
            this.hideConfirmDialog();
        });
    }

    private static addNoButtonClickListener() {
        const noButtonElement = getConfirmDialogNoButtonElement();
        noButtonElement.addEventListener('click', (event) => {
            this.hideConfirmDialog();
        });
    }
}