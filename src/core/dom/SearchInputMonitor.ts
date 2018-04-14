import { getElementById } from 'core/dom/DomUtilities';

export class SearchInputMonitor {
    private static timeoutId: number;
    private static searchStr: string;

    public static start(callback) {
        this.getSearchInputElement().addEventListener('keyup', (event) => {
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
                this.timeoutId = undefined;
            }
            this.timeoutId = setTimeout(() => {
                this.searchStr = this.getSearchInputElement().value;
                callback();
            }, 300);
        });
    }

    public static getSearchStr(): string {
        return this.searchStr;
    }

    private static getSearchInputElement(): HTMLInputElement {
        return <HTMLInputElement>getElementById('search-input');
    }
}