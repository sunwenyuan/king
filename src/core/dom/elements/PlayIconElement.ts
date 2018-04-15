import { createElement, ElementType, getDataFromElement } from 'core/dom/DomUtilities';
import { Game } from 'core/datamodel/Game';

/**
 * A static class to manipulate game's play icon element.
 * Whenever user click on this icon, it should jump to game play page.
 * But for not it will only trigger an alert with game url displayed.
 * 
 * @export
 * @class PlayIconElement
 */
export class PlayIconElement {
    /**
     * Create play icon for a game.
     * Game's short name will be saved in dom as [data-short] attribute.
     * 
     * @static
     * @param {Game} game 
     * @returns {HTMLElement} 
     * @memberof PlayIconElement
     */
    public static create(game: Game): HTMLElement {
        const playIconElement = <HTMLElement>createElement(
            ElementType.I,
            undefined,
            ['clickable', 'far', 'fa-play-circle'],
            [],
            [{name: 'short', value: game.short}]
        );
        return playIconElement;
    }

    /**
     * Get game's short name from play icon element.
     * Short name should be retrived from this icon element's [data-short] attribute.
     * 
     * @static
     * @param {HTMLElement} heartIconElement 
     * @returns {string} 
     * @memberof PlayIconElement
     */
    public static getGameShortName(heartIconElement: HTMLElement): string {
        return getDataFromElement(heartIconElement, 'short');
    }
}