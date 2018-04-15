import { createElement, ElementType } from 'core/dom/DomUtilities';

/**
 * A static class to create game info div element.
 * 
 * @export
 * @class GameInfoDivElement
 */
export class GameInfoDivElement {
    public static create(): HTMLDivElement {
        return <HTMLDivElement>createElement(ElementType.DIV, undefined, ['game__info']);
    }
}