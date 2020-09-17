import {Element} from "./Element.mjs";

export class ErrorElement extends Element {
    _getHtml() {
        return `<h1>Error</h1>`
    }

    _addStyle() {
        this.$el.style.background = 'red';
        this.$el.classList.add('error');
    }

    _increase() {
        const height = this.$el.offsetHeight;
        console.log(height)
        this.$el.style.height = `${height * 2}px`
    }

    _setHandlers() {
        this.$el.addEventListener('click', this._increase.bind(this));
    }

    destroy() {
        this.$el.removeEventListener('click', this._increase);
    }
}