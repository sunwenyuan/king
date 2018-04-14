import { getElementById } from 'core/dom/DomUtilities';
import { Game } from 'core/datamodel/Game';
import { HeartIconElement } from 'core/dom/elements/HeartIconElement';
import { FavoriteGames } from 'core/datamodel/FavoriteGames';

function getOverlayElement(): HTMLDivElement {
    return <HTMLDivElement>getElementById('overlay');
}

function getOverlayScreenImgElement(): HTMLElement {
    return <HTMLElement>getElementById('overlay-screenshot');
}

function getOverlayInfobarNameDivElement(): HTMLDivElement {
    return <HTMLDivElement>getElementById('overlay-infobar-name');
}

function getOverlayHeartIconElement(): HTMLElement {
    return <HTMLElement>getElementById('overlay-heart');
}

function getOverlayPlayIconElement(): HTMLElement {
    return <HTMLElement>getElementById('overlay-play');
}

const CloseButtonId: string = 'overlay-close-icon';

export class Overlay {
    private static game: Game;
    public static showOverlay(game: Game) {
        this.game = game;
        const overlayElement = getOverlayElement();
        const overlayScreenshotImgElement = getOverlayScreenImgElement();
        const imgUrl = `url(http://royal1.midasplayer.com/images/games/${game.short}/dumps/screen_${game.short}.gif)`;
        overlayScreenshotImgElement.setAttribute('style', `background-image:${imgUrl}`);

        getOverlayInfobarNameDivElement().textContent = game.name;

        const heartIconElement = getOverlayHeartIconElement();
        HeartIconElement.updateHeartStatus(game.short, heartIconElement);

        overlayElement.classList.add('open');
    }

    public static hideOverlay() {
        const overlayElement = getOverlayElement();
        overlayElement.classList.remove('open');
    }

    public static addListeners() {
        this.addCloseClickListener();
        this.addHeartClickListener();
        this.addPlayClickListener();
    }

    private static addCloseClickListener() {
        const closeIconElement: HTMLElement = <HTMLElement>getElementById(CloseButtonId);
        closeIconElement.addEventListener('click', (event) => {
            event.stopPropagation();
            this.hideOverlay();
        });
    }

    private static addHeartClickListener() {
        const heartIconElement = getOverlayHeartIconElement();
        heartIconElement.addEventListener('click', (event) => {
            event.stopPropagation();
            FavoriteGames.handleFavoriteStatusChange(this.game.short);
            HeartIconElement.updateHeartStatus(this.game.short, heartIconElement);

            HeartIconElement.updateHeartStatus(this.game.short, <HTMLElement>getElementById(`heart-${this.game.short}`));
        });
    }

    private static addPlayClickListener() {
        const playIconElement = getOverlayPlayIconElement();
        playIconElement.addEventListener('click', (event) => {
            event.stopPropagation();
            alert(`Game url: ${this.game.url}`);
        });
    }
};