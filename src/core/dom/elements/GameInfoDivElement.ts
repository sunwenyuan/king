import { createElement, ElementType } from 'core/dom/DomUtilities';

export class GameInfoDivElement {
    public static create(): HTMLDivElement {
        return <HTMLDivElement>createElement(ElementType.DIV, undefined, ['game__info']);
    }
}