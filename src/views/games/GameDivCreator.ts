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

async function gameImgElementClickHandler(event: MouseEvent) {
    event.stopPropagation();
    const short: string = GameImageDivElement.getGameShortName(<HTMLDivElement>event.target);
    const games: Array<Game> = await new GetGamesAction().perform([short]);
    if (games.length === 1) {
        Overlay.showOverlay(games[0]);
    }
}

async function playIconElementClickHandler(event: MouseEvent) {
    const playIconElement: HTMLElement = <HTMLElement>event.target;
    const short: string = PlayIconElement.getGameShortName(playIconElement);
    const games: Array<Game> = await new GetGamesAction().perform([short]);
    if (games.length === 1) {
        alert(`Game url: ${games[0].url}`);
    }
}

export class GameDivCreator {
    public static create(game: Game): HTMLDivElement {
        const gameDivElement = GameDivElement.create(game);

        // Create game image element
        const gameImgElement = GameImageDivElement.create(game);
        gameImgElement.addEventListener('click', gameImgElementClickHandler);

        // Create game info div.
        // This div will hold game name, play icon and heart icon
        const gameInfoElement = GameInfoDivElement.create();

        const gameNameDiv = GameNameDivElement.create(game);

        const gameOperationsDivElement = GameOperationsDivElement.create();

        const playIconElement = PlayIconElement.create(game);
        playIconElement.addEventListener('click', playIconElementClickHandler);

        const heartIconElement = HeartIconElement.create(game);
        heartIconElement.addEventListener('click', function(event){
            const heartIconElement: HTMLElement = <HTMLElement>event.target;
            const short: string = HeartIconElement.getGameShortName(heartIconElement);
            FavoriteGames.handleFavoriteStatusChange(short);
            HeartIconElement.updateHeartStatus(short, heartIconElement);
        });

        gameOperationsDivElement.appendChild(playIconElement);
        gameOperationsDivElement.appendChild(heartIconElement);

        gameInfoElement.appendChild(gameNameDiv);
        gameInfoElement.appendChild(gameOperationsDivElement);

        // Append image and info
        gameDivElement.appendChild(gameImgElement);
        gameDivElement.appendChild(gameInfoElement);

        return gameDivElement;
    }
}