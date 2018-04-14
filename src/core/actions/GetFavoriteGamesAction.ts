export class GetFavoriteGamesAction {
    async perform(): Promise<Array<string>> {
        const favorites: Array<string> = ['eightballpool', 'nineballpool', 'briscolaking', 'chain_reaction', 'croco_loco', 'jelly_swelly', 'letter_swap', 'solitaire_swing'];
        return Promise.resolve(favorites);
    }
}