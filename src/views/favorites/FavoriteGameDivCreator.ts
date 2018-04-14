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

async function gameImgElementClickHandler(event: MouseEvent) {
    // event.stopPropagation();
    const short: string = GameImageDivElement.getGameShortName(<HTMLDivElement>event.target);
    const games: Array<Game> = await new GetGamesAction().perform([short]);
    if (games.length === 1) {
        alert(`Game url: ${games[0].url}`);
    }
}

async function heartIconElementClickHandler(event: MouseEvent) {
    event.stopPropagation();
    const short: string = HeartIconElement.getGameShortName(<HTMLElement>event.target);
    const games: Array<Game> = await new GetGamesAction().perform([short]);
    if (games.length === 1) {
        ConfirmDialog.showConfirmDialog(games[0]);
    }
}

export class FavoriteGameDivCreator {
    public static create(game: Game): HTMLDivElement {
        const gameDivElement = GameDivElement.create(game);

        // Create game image element
        const gameImgElement = GameImageDivElement.create(game);
        gameImgElement.addEventListener('click', gameImgElementClickHandler);
        const playIconelement = PlayIconElement.create(game);
        gameImgElement.appendChild(playIconelement);

        // Create game info div.
        // This div will hold game name, play icon and heart icon
        const gameInfoElement = GameInfoDivElement.create();

        const gameNameDiv = GameNameDivElement.create(game);

        const gameOperationsDivElement = GameOperationsDivElement.create();

        const heartIconElement = HeartIconElement.create(game);
        heartIconElement.addEventListener('click', heartIconElementClickHandler);
        gameOperationsDivElement.appendChild(heartIconElement);

        gameInfoElement.appendChild(gameNameDiv);
        gameInfoElement.appendChild(gameOperationsDivElement);

        // Append image and info
        gameDivElement.appendChild(gameImgElement);
        gameDivElement.appendChild(gameInfoElement);

        return gameDivElement;
    }
}