export enum ElementType {
    DIV = 'div',
    SPAN = 'span',
    I = 'i',
    IMG = 'img'
}

export function createElement(type: ElementType, id: string = undefined, classList: Array<string> = [], attributes: Array<{name: string; value: string;}> = [], data: Array<{name: string; value: string;}> = []): Element {
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

export function createTextSpanElement(text: string): HTMLElement {
    const spanElement = document.createElement(ElementType.SPAN);
    spanElement.appendChild(document.createTextNode(text));
    return spanElement;
}

export function getElementListByClassName(className: string): HTMLCollectionOf<Element> {
    return document.getElementsByClassName(className);
}

export function getElementById(id: string): Element {
    return document.getElementById(id);
}

export function getDataFromElement(element: HTMLElement, dataAttrName: string): string {
    return element.dataset[dataAttrName];
}
