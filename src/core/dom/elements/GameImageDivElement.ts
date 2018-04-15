import { createElement, ElementType, getDataFromElement } from 'core/dom/DomUtilities';
import { Game } from 'core/datamodel/Game';

/**
 * A static class to manipulate div element that holds game's 170*80 sized icon image.
 * 
 * @export
 * @class GameImageDivElement
 */
export class GameImageDivElement {
    /**
     * Create a div element to display game's 170*80 sized icon image as background image.
     * Game's short name will be saved in dom as [data-short] attribute.
     * 
     * @static
     * @param {Game} game 
     * @returns {HTMLDivElement} 
     * @memberof GameImageDivElement
     */
    public static create(game: Game): HTMLDivElement {
        const imgUrl = `http://royal1.midasplayer.com/images/games/${game.short}/${game.short}_170x80.gif`;
        const gameImgNode = <HTMLDivElement>createElement(
            ElementType.DIV,
            undefined,
            ['clickable', 'game__image', 'display-center'],
            [
                {name: 'style', value: `background-image: url(${imgUrl})`},
                {name: 'width', value: '100%'}
            ],
            [{name: 'short', value: game.short}]
        );
        return gameImgNode;
    }

    /**
     * Get game's short name from a div element.
     * Short name should be retrived from this div element's [data-short] attribute.
     * 
     * @static
     * @param {HTMLDivElement} gameImageElement 
     * @returns {string} 
     * @memberof GameImageDivElement
     */
    public static getGameShortName(gameImageElement: HTMLDivElement): string {
        return getDataFromElement(gameImageElement, 'short');
    }
}