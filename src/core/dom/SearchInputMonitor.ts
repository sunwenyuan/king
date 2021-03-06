import { getElementById } from 'core/dom/DomUtilities';

/**
 * Monitor on search input field and trigger a callback function whenever user input something to search.
 * It has a 300ms time throttle.
 * Only when user don't type in any charactor again in 300ms, the callback function will be triggered.
 * 
 * @export
 * @class SearchInputMonitor
 */
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

    /**
     * Get the inputed search string.
     * 
     * @static
     * @returns {string} 
     * @memberof SearchInputMonitor
     */
    public static getSearchStr(): string {
        return this.searchStr;
    }

    private static getSearchInputElement(): HTMLInputElement {
        return <HTMLInputElement>getElementById('search-input');
    }
}