import { getElementById } from 'core/dom/DomUtilities';
import { GetGamesAction } from 'core/actions/GetGamesAction';
import { GetFavoriteGamesAction } from 'core/actions/GetFavoriteGamesAction';
import { FavoriteGames } from 'core/datamodel/FavoriteGames';
import { FavoriteGameDivCreator } from './FavoriteGameDivCreator';
import { ConfirmDialog } from './ConfirmDialog';
import { ScrollToBottomDetector } from 'core/dom/ScrollToBottomDetector';
import { GameDivElement } from 'core/dom/elements/GameDivElement';
import { SearchInputMonitor } from 'core/dom/SearchInputMonitor';

const GamesGalleryDivId: string = 'games-gallery-container';

async function loadGames() {
    const startIndex: number = GameDivElement.getRenderedGameNumber();
    const games = await new GetGamesAction(
        startIndex,
        SearchInputMonitor.getSearchStr()
    ).perform(FavoriteGames.getFavorites());
    const gameGalleryDivElement: HTMLDivElement = <HTMLDivElement>getElementById(GamesGalleryDivId);
    games.forEach(game => {
        const gameNode = FavoriteGameDivCreator.create(game);
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
    ConfirmDialog.addListeners();
    SearchInputMonitor.start(searchInputChangeHandler);
    const favorites = await new GetFavoriteGamesAction().perform();
    FavoriteGames.setFavorites(favorites);
    await loadGames();
}