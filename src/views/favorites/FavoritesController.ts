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
    // Get how many games rendered in current page, it will be use as start index when get games from server.
    const startIndex: number = GameDivElement.getRenderedGameNumber();
    // Get favorite games with start index and search string.
    const games = await new GetGamesAction(
        startIndex,
        SearchInputMonitor.getSearchStr()
    ).perform(FavoriteGames.getFavorites());

    // Create game tiles and append to current page.
    const gameGalleryDivElement: HTMLDivElement = <HTMLDivElement>getElementById(GamesGalleryDivId);
    games.forEach(game => {
        const gameNode = FavoriteGameDivCreator.create(game);
        gameGalleryDivElement.appendChild(gameNode);
    });

    // Unlock scroll to bottom detector.
    ScrollToBottomDetector.resetIsBottom();
}

function searchInputChangeHandler(searchStr: string) {
    GameDivElement.removeAll();
    loadGames();
}

// This method will be called immediately after the dom is ready.
export async function setup() {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("../ServiceWorker.js", {scope: '/views/'})
            .then(function (registration) {
                console.log("Service Worker registered with scope:", registration.scope);
            }).catch(function (err) {
                console.log("Service worker registration failed:", err);
            });
    }
    // Start scroll to bottom detector.
    ScrollToBottomDetector.start(loadGames);
    // Get confirm dialog ready.
    ConfirmDialog.addListeners();
    // Start search input field monitor.
    SearchInputMonitor.start(searchInputChangeHandler);
    // Get favorite game short name list from server.
    const favorites = await new GetFavoriteGamesAction().perform();
    FavoriteGames.setFavorites(favorites);
    // load games to render to current page.
    await loadGames();
}