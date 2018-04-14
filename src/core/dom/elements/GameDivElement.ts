import { createElement, ElementType, getElementById, getElementListByClassName } from 'core/dom/DomUtilities';
import { Game } from 'core/datamodel/Game';

export class GameDivElement {
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

    public static remove(game: Game) {
        const gameDivElement = getElementById(game.short);
        if (gameDivElement) {
            gameDivElement.remove();
        }
    }

    public static removeAll() {
        Array.from(getElementListByClassName('game')).forEach(element => {
            element.remove();
        });
    }

    public static getRenderedGameNumber(): number {
        return getElementListByClassName('game').length;
    }
}