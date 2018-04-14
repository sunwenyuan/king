import { createElement, ElementType, getDataFromElement } from 'core/dom/DomUtilities';
import { FavoriteGames } from 'core/datamodel/FavoriteGames';
import { Game } from 'core/datamodel/Game';

export class HeartIconElement {
    public static create(game: Game): HTMLElement {
        const heartIconElement = <HTMLElement>createElement(
            ElementType.I,
            `heart-${game.short}`,
            ['clickable', 'fa-heart'],
            [],
            [{name: 'short', value: game.short}]
        );
        if (FavoriteGames.isFavorite(game.short)) {
            this.activateHeart(heartIconElement);
        }
        else {
            this.deactivateHeart(heartIconElement);
        }
        return heartIconElement;
    }

    public static getGameShortName(heartIconElement: HTMLElement): string {
        return getDataFromElement(heartIconElement, 'short');
    }

    public static updateHeartStatus(short: string, heartIconElement: HTMLElement) {
        if (FavoriteGames.isFavorite(short)) {
            this.activateHeart(heartIconElement);
        }
        else {
            this.deactivateHeart(heartIconElement);
        }
    }

    private static activateHeart(heartIconElement: HTMLElement) {
        heartIconElement.classList.add('heart-active')
        heartIconElement.classList.add('fas');
        heartIconElement.classList.remove('far');
    }

    private static deactivateHeart(heartIconElement: HTMLElement) {
        heartIconElement.classList.remove('heart-active');
        heartIconElement.classList.remove('fas');
        heartIconElement.classList.add('far');
    }
}