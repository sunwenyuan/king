import { createElement, ElementType, getElementById, getElementListByClassName } from 'core/dom/DomUtilities';
import { Game } from 'core/datamodel/Game';

/**
 * A static class to manipulate game tiles.
 * Each game tile is a div element, it contains two parts.
 * A div element holds a 170*80 sized game icon image, and a game info div element.
 * This game info div element will display game names and some icons to show user all operations
 * he can perform.
 * 
 * This class manipulate the top most div element for a game tiles.
 * 
 * @export
 * @class GameDivElement
 */
export class GameDivElement {

    /**
     * Create a div element with a input game information.
     * Game's short name is used as div element's id.
     * Game's short name will be saved in dom as [data-short] attribute.
     * 
     * @static
     * @param {Game} game 
     * @returns {HTMLDivElement} 
     * @memberof GameDivElement
     */
    public static create(game: Game): HTMLDivElement {
        const gameDivElement = <HTMLDivElement>createElement(
            ElementType.DIV,
            game.short,
            ['game'],
            [],
            [{
                name: 'short',
                value: game.short
            }]
        );
        return gameDivElement;
    }

    /**
     * Remove a game tile from dom.
     * 
     * @static
     * @param {Game} game 
     * @memberof GameDivElement
     */
    public static remove(game: Game) {
        const gameDivElement = getElementById(game.short);
        if (gameDivElement) {
            gameDivElement.remove();
        }
    }

    /**
     * Remove all the game tiles in current web page.
     * 
     * @static
     * @memberof GameDivElement
     */
    public static removeAll() {
        Array.from(getElementListByClassName('game')).forEach(element => {
            element.remove();
        });
    }

    /**
     * Get the number of game tiles rendered in current web page.
     * 
     * @static
     * @returns {number} 
     * @memberof GameDivElement
     */
    public static getRenderedGameNumber(): number {
        return getElementListByClassName('game').length;
    }
}