import { getElementById } from 'core/dom/DomUtilities';
import { GetGamesAction } from 'core/actions/GetGamesAction';
import { GetFavoriteGamesAction } from 'core/actions/GetFavoriteGamesAction';
import { FavoriteGames } from 'core/datamodel/FavoriteGames';
import { GameDivCreator } from './GameDivCreator';
import { Overlay } from './Overlay';
import { ScrollToBottomDetector } from 'core/dom/ScrollToBottomDetector';
import { GameDivElement } from 'core/dom/elements/GameDivElement';
import { SearchInputMonitor } from 'core/dom/SearchInputMonitor';

const GamesGalleryDivId: string = 'games-gallery-container';

async function loadGames() {
    const startIndex: number = GameDivElement.getRenderedGameNumber();
    const games = await new GetGamesAction(startIndex, SearchInputMonitor.getSearchStr()).perform();
    const gameGalleryDivElement: HTMLDivElement = <HTMLDivElement>getElementById(GamesGalleryDivId);
    games.forEach(game => {
        const gameNode = GameDivCreator.create(game);
        gameGalleryDivElement.appendChild(gameNode);
    });
    ScrollToBottomDetector.resetIsBottom();
}

function searchInputChangeHandler(searchStr: string) {
    GameDivElement.removeAll();
    loadGames();
}

export async function setup() {
    ScrollToBottomDetector.start(loadGames);
    Overlay.addListeners();
    SearchInputMonitor.start(searchInputChangeHandler);
    const favorites = await new GetFavoriteGamesAction().perform();
    FavoriteGames.setFavorites(favorites);
    await loadGames();
}