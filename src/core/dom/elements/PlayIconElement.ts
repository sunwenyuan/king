import { createElement, ElementType, getDataFromElement } from 'core/dom/DomUtilities';
import { Game } from 'core/datamodel/Game';

export class PlayIconElement {
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

    public static getGameShortName(heartIconElement: HTMLElement): string {
        return getDataFromElement(heartIconElement, 'short');
    }
}