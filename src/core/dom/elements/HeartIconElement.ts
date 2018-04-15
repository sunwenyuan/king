import { createElement, ElementType, getDataFromElement } from 'core/dom/DomUtilities';
import { FavoriteGames } from 'core/datamodel/FavoriteGames';
import { Game } from 'core/datamodel/Game';

/**
 * Static class to manipulate heart icon div.
 * When a heart icon is active, it will be displayed in red color, which means current user has added it to his favorite.
 * Otherwise it will be displayed in which color and black border.
 * This heart icon element will be added to game info div's operation div.
 * 
 * @export
 * @class HeartIconElement
 */
export class HeartIconElement {
    /**
     * Create heart icon for a game.
     * 'heart-game short name' is used as div element's id.
     * Game's short name will be saved in dom as [data-short] attribute.
     * 
     * @static
     * @param {Game} game 
     * @returns {HTMLElement} 
     * @memberof HeartIconElement
     */
    public static create(game: Game): HTMLElement {
        const heartIconElement = <HTMLElement>createElement(
            ElementType.I,
            `heart-${game.short}`,
            ['clickable', 'fa-heart'],
            [],
            [{name: 'short', value: game.short}]
        );
        if (FavoriteGames.isFavorite(game.short)) {
            this.activateHeart(heartIconElement);
        }
        else {
            this.deactivateHeart(heartIconElement);
        }
        return heartIconElement;
    }

    /**
     * Get game's short name from heart icon element.
     * Short name should be retrived from this icon element's [data-short] attribute.
     * 
     * @static
     * @param {HTMLElement} heartIconElement 
     * @returns {string} 
     * @memberof HeartIconElement
     */
    public static getGameShortName(heartIconElement: HTMLElement): string {
        return getDataFromElement(heartIconElement, 'short');
    }

    /**
     * Check if a game is user's favorite, and change heart icon's classList
     * 
     * @static
     * @param {string} short 
     * @param {HTMLElement} heartIconElement 
     * @memberof HeartIconElement
     */
    public static updateHeartStatus(short: string, heartIconElement: HTMLElement) {
        if (FavoriteGames.isFavorite(short)) {
            this.activateHeart(heartIconElement);
        }
        else {
            this.deactivateHeart(heartIconElement);
        }
    }

    /**
     * When a game is added to user's favorite, heart icon will be activated.
     * Which means change icon to solid red color.
     * 
     * @private
     * @static
     * @param {HTMLElement} heartIconElement 
     * @memberof HeartIconElement
     */
    private static activateHeart(heartIconElement: HTMLElement) {
        heartIconElement.classList.add('heart-active')
        heartIconElement.classList.add('fas');
        heartIconElement.classList.remove('far');
    }

    /**
     * If a game is not included in user's favorite, heart icon will be deactivated.
     * Which means hange icon to white color and black border.
     * 
     * @private
     * @static
     * @param {HTMLElement} heartIconElement 
     * @memberof HeartIconElement
     */
    private static deactivateHeart(heartIconElement: HTMLElement) {
        heartIconElement.classList.remove('heart-active');
        heartIconElement.classList.remove('fas');
        heartIconElement.classList.add('far');
    }
}