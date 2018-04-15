/**
 * Static class to check browser name.
 * Only provide one public method to check if current browser is Safari,
 * because this is the only check needed currently.
 * 
 * @export
 * @class BrowserDetector
 */
export class BrowserDetector {
    private static browserName: string;

    public static isSafari(): boolean {
        return this.getBrowserName() === 'Safari';
    }

    private static getBrowserName(): string {
        if (this.browserName === undefined) {
            const userAgent: string = window.navigator.userAgent;
            let browserName: string = 'other';
            if (userAgent.match(/OPR/i) || userAgent.match(/Opera/i)) {
                browserName = 'Opera';
            }
            else if (userAgent.match(/MSIE/i) || userAgent.match(/Trident/i)) {
                browserName = 'Internet Explorer';
            }
            else if (userAgent.match(/firefox/i) && userAgent.match(/seamonkey/i) === null) {
                browserName = 'Firefox';
            }
            else if (userAgent.match(/Safari/i) && userAgent.match(/Chrome/i) === null && userAgent.match(/Chromium/i) === null) {
                browserName = 'Safari';
            }
            else if (userAgent.match(/Chrome/i) && userAgent.match(/Chromium/i) === null) {
                browserName = 'Chrome';
            }
            else if (userAgent.match(/Chromium/i)) {
                browserName = 'Chromium';
            }
            this.browserName = browserName;
        }
        return this.browserName;
    }
}