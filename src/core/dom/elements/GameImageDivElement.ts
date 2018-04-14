import { createElement, ElementType, getDataFromElement } from 'core/dom/DomUtilities';
import { Game } from 'core/datamodel/Game';

export class GameImageDivElement {
    public static create(game: Game): HTMLDivElement {
        // Create game image element to display game icon
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

    public static getGameShortName(gameImageElement: HTMLDivElement): string {
        return getDataFromElement(gameImageElement, 'short');
    }
}