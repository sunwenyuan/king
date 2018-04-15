import { Game } from '../datamodel/Game';

/**
 * Mock up.
 * Get games infomation from server.
 */
export class GetGamesAction {
    /**
     * Number of games should be return for each request.
     */
    private offset: number = 40;

    constructor(
        private startIndex: number = 0,
        private searchStr: string = ''
    ) {}

    async perform(shortNames: Array<string> = undefined): Promise<Array<Game>> {
        // Get all games back.
        const fetchResponse: Response = await fetch('../../core/actions/games.json');
        const responseContent = await fetchResponse.json();
        let games: Array<Game> = responseContent.games;

        // If a list of game short names is defined, then only get game information for these predefined games.
        if (shortNames) {
            games = games.filter(game => shortNames.includes(game.short));
        }

        // If search string is not empty, filter games by name and short name.
        if (this.searchStr !== '') {
            this.searchStr = this.searchStr.toLowerCase();
            games = games.filter(game => {
                return game.name.toLowerCase().includes(this.searchStr)
                    || game.short.toLowerCase().includes(this.searchStr);
            });
        }

        // Slice games by start index and page size.
        games = games.slice(this.startIndex, this.offset + this.startIndex);
        
        return Promise.resolve(games);
    }
}