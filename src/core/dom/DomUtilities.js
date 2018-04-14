System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function createElement(type, id = undefined, classList = [], attributes = [], data = []) {
        const element = document.createElement(type);
        if (id) {
            element.setAttribute('id', id);
        }
        classList.forEach(classItem => {
            element.classList.add(classItem);
        });
        attributes.forEach(attribute => {
            element.setAttribute(attribute.name, attribute.value);
        });
        data.forEach(dataItem => {
            element.setAttribute(`data-${dataItem.name}`, dataItem.value);
        });
        return element;
    }
    exports_1("createElement", createElement);
    function createTextSpanElement(text) {
        const spanElement = document.createElement(ElementType.SPAN);
        spanElement.appendChild(document.createTextNode(text));
        return spanElement;
    }
    exports_1("createTextSpanElement", createTextSpanElement);
    function getElementListByClassName(className) {
        return document.getElementsByClassName(className);
    }
    exports_1("getElementListByClassName", getElementListByClassName);
    function getElementById(id) {
        return document.getElementById(id);
    }
    exports_1("getElementById", getElementById);
    function getDataFromElement(element, dataAttrName) {
        return element.dataset[dataAttrName];
    }
    exports_1("getDataFromElement", getDataFromElement);
    var ElementType;
    return {
        setters: [],
        execute: function () {
            (function (ElementType) {
                ElementType["DIV"] = "div";
                ElementType["SPAN"] = "span";
                ElementType["I"] = "i";
                ElementType["IMG"] = "img";
            })(ElementType || (ElementType = {}));
            exports_1("ElementType", ElementType);
        }
    };
});
//# sourceMappingURL=DomUtilities.js.map