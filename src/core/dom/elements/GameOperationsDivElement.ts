import { createElement, ElementType } from 'core/dom/DomUtilities';

/**
 * Static class to create a div element to hold game operation icons.
 * This element will be append to game info div element.
 * 
 * @export
 * @class GameOperationsDivElement
 */
export class GameOperationsDivElement {
    public static create(): HTMLDivElement {
        return <HTMLDivElement>createElement(ElementType.DIV, undefined, ['game__info__operations', 'display-center']);
    }
}