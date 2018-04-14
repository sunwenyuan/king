export class ScrollToBottomDetector {
    private static isBottom: boolean = false;

    public static start(callback) {
        window.addEventListener('scroll', (event) => {
            if (document.body.scrollHeight - document.documentElement.scrollTop === document.body.clientHeight) {
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