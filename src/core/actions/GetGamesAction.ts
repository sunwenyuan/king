import { Game } from '../datamodel/Game';

export class GetGamesAction {
    private offset: number = 40;

    constructor(
        private startIndex: number = 0,
        private searchStr: string = ''
    ) {}

    async perform(shortNames: Array<string> = undefined): Promise<Array<Game>> {
        const fetchResponse: Response = await fetch('../../core/actions/games.json');
        const responseContent = await fetchResponse.json();
        let games: Array<Game> = responseContent.games;
        if (shortNames) {
            games = games.filter(game => shortNames.includes(game.short));
        }
        if (this.searchStr !== '') {
            this.searchStr = this.searchStr.toLowerCase();
            games = games.filter(game => {
                return game.name.toLowerCase().includes(this.searchStr)
                    || game.short.toLowerCase().includes(this.searchStr);
            });
        }
        games = games.slice(this.startIndex, this.offset + this.startIndex);
        return Promise.resolve(games);
    }
}