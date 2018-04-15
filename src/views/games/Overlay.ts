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

/**
 * A static class to manipulate overlay.
 * The use case is when user click on game icon image,
 * we need to pop up an overlay to show user more information about this game.
 * 
 * @export
 * @class Overlay
 */
export class Overlay {
    private static game: Game;
    
    /**
     * Show overlay.
     * Save game information for click listener of play icon and heart icon.
     * Display game screenshot.
     * Set heart icon to correct status.
     * 
     * @static
     * @param {Game} game 
     * @memberof Overlay
     */
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

    /**
     * Hide overlay
     * 
     * @static
     * @memberof Overlay
     */
    public static hideOverlay() {
        const overlayElement = getOverlayElement();
        overlayElement.classList.remove('open');
    }

    /**
     * Add click listeners to close icon, play icon and heart icon
     * 
     * @static
     * @memberof Overlay
     */
    public static addListeners() {
        this.addCloseClickListener();
        this.addHeartClickListener();
        this.addPlayClickListener();
    }

    /**
     * Click event listener for close icon.
     * 
     * @private
     * @static
     * @memberof Overlay
     */
    private static addCloseClickListener() {
        const closeIconElement: HTMLElement = <HTMLElement>getElementById(CloseButtonId);
        closeIconElement.addEventListener('click', (event) => {
            this.hideOverlay();
        });
    }

    /**
     * Click event listener for heart icon.
     * 1. Update user's favorite.
     * 2. Update heart icon's status in overlay.
     * 3. Update corresponding game tile's heart icon status.
     * 
     * @private
     * @static
     * @memberof Overlay
     */
    private static addHeartClickListener() {
        const heartIconElement = getOverlayHeartIconElement();
        heartIconElement.addEventListener('click', (event) => {
            FavoriteGames.handleFavoriteStatusChange(this.game.short);
            HeartIconElement.updateHeartStatus(this.game.short, heartIconElement);

            HeartIconElement.updateHeartStatus(this.game.short, <HTMLElement>getElementById(`heart-${this.game.short}`));
        });
    }

    /**
     * Click event listener for play icon.
     * 1. Goto game play url.
     * 
     * @private
     * @static
     * @memberof Overlay
     */
    private static addPlayClickListener() {
        const playIconElement = getOverlayPlayIconElement();
        playIconElement.addEventListener('click', (event) => {
            alert(`Game url: ${this.game.url}`);
        });
    }
};