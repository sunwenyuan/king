import { createElement, createTextSpanElement, ElementType } from 'core/dom/DomUtilities';
import { Game } from 'core/datamodel/Game';

export class GameNameDivElement {
    public static create(game: Game): HTMLDivElement {
        const gameNameDiv = <HTMLDivElement>createElement(ElementType.DIV, undefined, ['game__info__name']);
        gameNameDiv.appendChild(createTextSpanElement(game.name));
        return gameNameDiv;
    }
}