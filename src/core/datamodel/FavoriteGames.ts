export class FavoriteGames {
    private static favorites: Array<string> = [];

    public static setFavorites(favorites: Array<string>) {
        this.favorites = favorites;
    }

    public static getFavorites(): Array<string> {
        return this.favorites;
    }

    public static isFavorite(short: string): boolean {
        return this.favorites.find(item => item === short) !== undefined;
    }

    public static handleFavoriteStatusChange(short: string) {
        if (this.isFavorite(short)) {
            this.favorites = this.favorites.filter(item => item !== short);
        }
        else {
            this.favorites = [...this.favorites, short];
        }
    }
}