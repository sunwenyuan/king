import { BrowserDetector } from 'core/dom/BrowserDetector';

/**
 * Check if user already scroll to the bottom of current web page.
 * It's used to implement a simple version of lazy loading.
 * The idea is we don't display all the 118 game tiles for the user in once, 
 * instead we only load 40 games at a time, 
 * and when user scrolled to the bottom we will load next 40 games.
 * It also provide a lock, the first time user scrolled to bottom,
 * it will trigger a callback function, and also set the lock to true.
 * This lock will be set to false after the callback function finished.
 * So that we can make sure the callback function won't be called too often.
 * 
 * @export
 * @class ScrollToBottomDetector
 */
export class ScrollToBottomDetector {
    private static isBottom: boolean = false;

    public static start(callback) {
        window.addEventListener('scroll', (event) => {
            const scrollHeight: number = document.body.scrollHeight;
            const scrollTop: number = BrowserDetector.isSafari() ? document.body.scrollTop : document.documentElement.scrollTop;
            const clientHeight: number = document.body.clientHeight;
            if (scrollHeight - scrollTop === clientHeight) {
                if (!this.isBottom) {
                    this.isBottom = true;
                    callback();
                }
            }
        });
    }

    public static resetIsBottom() {
        this.isBottom = false;
    }
}