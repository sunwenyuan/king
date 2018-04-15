import { BrowserDetector } from 'core/dom/BrowserDetector';

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