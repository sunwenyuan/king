import { Game } from 'core/datamodel/Game';
import { GameImageDivElement } from 'core/dom/elements/GameImageDivElement';
import { GameNameDivElement } from 'core/dom/elements/GameNameDivElement';
import { HeartIconElement } from 'core/dom/elements/HeartIconElement';
import { GameDivElement } from 'core/dom/elements/GameDivElement';
import { GameInfoDivElement } from 'core/dom/elements/GameInfoDivElement';
import { GameOperationsDivElement } from 'core/dom/elements/GameOperationsDivElement';
import { GetGamesAction } from 'core/actions/GetGamesAction';
import { PlayIconElement } from 'core/dom/elements/PlayIconElement';
import { ConfirmDialog } from './ConfirmDialog';

/**
 * When game icon image is clicked, we need to:
 * 1. Get game short name from the [data-short] attribute.
 * 2. Get full game information by short name from server.
 * 3. Goto game play page.
 * 
 * @param {MouseEvent} event 
 */
async function gameImgElementClickHandler(event: MouseEvent) {
    const short: string = GameImageDivElement.getGameShortName(<HTMLDivElement>event.target);
    const games: Array<Game> = await new GetGamesAction().perform([short]);
    if (games.length === 1) {
        alert(`Game url: ${games[0].url}`);
    }
}

/**
 * When heart icon is clicked, we need to:
 * 1. Get game short name from the [data-short] attribute.
 * 2. Get full game information by short name from server.
 * 3. Display confirm dialog for user to decide.
 * 
 * @param {MouseEvent} event 
 */
async function heartIconElementClickHandler(event: MouseEvent) {
    const short: string = HeartIconElement.getGameShortName(<HTMLElement>event.target);
    const games: Array<Game> = await new GetGamesAction().perform([short]);
    if (games.length === 1) {
        ConfirmDialog.showConfirmDialog(games[0]);
    }
}

export class FavoriteGameDivCreator {
    /**
     * Create game tile for favorite page.
     * A game tile in favorite should contain these parts:
     * 1. A div with 170*80 game icon image as background image, and a play icon in the middle of this div.
     * 2. A div for game info. This div should contain game's name and heart icon
     * 
     * @static
     * @param {Game} game 
     * @returns {HTMLDivElement} 
     * @memberof FavoriteGameDivCreator
     */
    public static create(game: Game): HTMLDivElement {
        // Create top most div element for a game tile.
        const gameDivElement = GameDivElement.create(game);

        // Create div element to hold game icon image and play icon.
        const gameImgElement = GameImageDivElement.create(game);
        gameImgElement.addEventListener('click', gameImgElementClickHandler);
        // Create play icon element
        const playIconelement = PlayIconElement.create(game);
        gameImgElement.appendChild(playIconelement);

        // Create game info div.
        // This div will hold game name and heart icon
        const gameInfoElement = GameInfoDivElement.create();
        // Create div element with name as textContent
        const gameNameDiv = GameNameDivElement.create(game);

        // Create div elements to hold heart icon
        const gameOperationsDivElement = GameOperationsDivElement.create();
        // Create heart icon element
        const heartIconElement = HeartIconElement.create(game);
        heartIconElement.addEventListener('click', heartIconElementClickHandler);
        gameOperationsDivElement.appendChild(heartIconElement);

        // Append game name and operations to game info element.
        gameInfoElement.appendChild(gameNameDiv);
        gameInfoElement.appendChild(gameOperationsDivElement);

        // Append game image and game info
        gameDivElement.appendChild(gameImgElement);
        gameDivElement.appendChild(gameInfoElement);

        return gameDivElement;
    }
}