import { createElement, createTextSpanElement, ElementType } from 'core/dom/DomUtilities';
import { Game } from 'core/datamodel/Game';

/**
 * Static class to create a div element holds game's name.
 * This element will be append to game info div element.
 * 
 * @export
 * @class GameNameDivElement
 */
export class GameNameDivElement {
    public static create(game: Game): HTMLDivElement {
        const gameNameDiv = <HTMLDivElement>createElement(ElementType.DIV, undefined, ['game__info__name']);
        gameNameDiv.appendChild(createTextSpanElement(game.name));
        return gameNameDiv;
    }
}