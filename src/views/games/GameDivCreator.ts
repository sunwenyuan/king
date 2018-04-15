import { Game } from 'core/datamodel/Game';
import { FavoriteGames } from 'core/datamodel/FavoriteGames';
import { GameImageDivElement } from 'core/dom/elements/GameImageDivElement';
import { GameNameDivElement } from 'core/dom/elements/GameNameDivElement';
import { HeartIconElement } from 'core/dom/elements/HeartIconElement';
import { GameDivElement } from 'core/dom/elements/GameDivElement';
import { GameInfoDivElement } from 'core/dom/elements/GameInfoDivElement';
import { GameOperationsDivElement } from 'core/dom/elements/GameOperationsDivElement';
import { Overlay } from './Overlay';
import { GetGamesAction } from 'core/actions/GetGamesAction';
import { PlayIconElement } from 'core/dom/elements/PlayIconElement';

/**
 * When game icon image is clicked, we need to:
 * 1. Get game short name from the [data-short] attribute.
 * 2. Get full game information by short name from server.
 * 3. Display overlay to show user game screenshot, game name and some operations.
 * 
 * @param {MouseEvent} event 
 */
async function gameImgElementClickHandler(event: MouseEvent) {
    event.stopPropagation();
    const short: string = GameImageDivElement.getGameShortName(<HTMLDivElement>event.target);
    const games: Array<Game> = await new GetGamesAction().perform([short]);
    if (games.length === 1) {
        Overlay.showOverlay(games[0]);
    }
}

/**
 * When play icon is clicked, we need to:
 * 1. Get game short name from the [data-short] attribute.
 * 2. Get full game information by short name from server.
 * 3. Goto game play page.
 * 
 * @param {MouseEvent} event 
 */
async function playIconElementClickHandler(event: MouseEvent) {
    const playIconElement: HTMLElement = <HTMLElement>event.target;
    const short: string = PlayIconElement.getGameShortName(playIconElement);
    const games: Array<Game> = await new GetGamesAction().perform([short]);
    if (games.length === 1) {
        alert(`Game url: ${games[0].url}`);
    }
}

export class GameDivCreator {
    /**
     * Create game tile.
     * A game tile should contain these parts:
     * 1. A div with 170*80 game icon image as background image.
     * 2. A div for game info. This div should contain game's name, play icon and heart icon
     * 
     * @static
     * @param {Game} game 
     * @returns {HTMLDivElement} 
     * @memberof FavoriteGameDivCreator
     */
    public static create(game: Game): HTMLDivElement {
        // Create top most div element for a game tile.
        const gameDivElement = GameDivElement.create(game);

        // Create div element to hold game icon image.
        const gameImgElement = GameImageDivElement.create(game);
        gameImgElement.addEventListener('click', gameImgElementClickHandler);

        // Create game info div.
        // This div will hold game name, play icon and heart icon
        const gameInfoElement = GameInfoDivElement.create();
        // Create div element with name as textContent
        const gameNameDiv = GameNameDivElement.create(game);

        // Create div elements to hold play icon and heart icon
        const gameOperationsDivElement = GameOperationsDivElement.create();

        const playIconElement = PlayIconElement.create(game);
        playIconElement.addEventListener('click', playIconElementClickHandler);

        const heartIconElement = HeartIconElement.create(game);
        // When a heart icon is click, we need to:
        // 1. Get game short name from [data-short] attribute.
        // 2. Update user's favorite.
        // 3. Update heart icon's status.
        heartIconElement.addEventListener('click', function(event){
            const heartIconElement: HTMLElement = <HTMLElement>event.target;
            const short: string = HeartIconElement.getGameShortName(heartIconElement);
            FavoriteGames.handleFavoriteStatusChange(short);
            HeartIconElement.updateHeartStatus(short, heartIconElement);
        });

        // Append play icon and heart icon to opeations element.
        gameOperationsDivElement.appendChild(playIconElement);
        gameOperationsDivElement.appendChild(heartIconElement);

        // Append game name and operations to game info element.
        gameInfoElement.appendChild(gameNameDiv);
        gameInfoElement.appendChild(gameOperationsDivElement);

        // Append image and info
        gameDivElement.appendChild(gameImgElement);
        gameDivElement.appendChild(gameInfoElement);

        return gameDivElement;
    }
}