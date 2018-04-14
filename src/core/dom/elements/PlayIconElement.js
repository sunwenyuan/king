System.register(["core/dom/DomUtilities"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DomUtilities_1, PlayIconElement;
    return {
        setters: [
            function (DomUtilities_1_1) {
                DomUtilities_1 = DomUtilities_1_1;
            }
        ],
        execute: function () {
            PlayIconElement = class PlayIconElement {
                static create(game) {
                    const playIconElement = DomUtilities_1.createElement(DomUtilities_1.ElementType.I, undefined, ['clickable', 'far', 'fa-play-circle'], [], [{ name: 'short', value: game.short }]);
                    return playIconElement;
                }
                static getGameShortName(heartIconElement) {
                    return DomUtilities_1.getDataFromElement(heartIconElement, 'short');
                }
            };
            exports_1("PlayIconElement", PlayIconElement);
        }
    };
});
//# sourceMappingURL=PlayIconElement.js.map