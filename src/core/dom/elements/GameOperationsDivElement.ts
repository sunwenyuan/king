import { createElement, ElementType } from 'core/dom/DomUtilities';

export class GameOperationsDivElement {
    public static create(): HTMLDivElement {
        return <HTMLDivElement>createElement(ElementType.DIV, undefined, ['game__info__operations', 'display-center']);
    }
}