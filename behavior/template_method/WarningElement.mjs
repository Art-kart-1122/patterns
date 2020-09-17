import {Element} from "./Element.mjs";

export class WarningElement extends Element {
    _getHtml() {
        return `<h1>Warning</h1>`
    }

    _addStyle() {
        this.$el.style.background = 'yellow';
        this.$el.classList.add('warning');
    }

    _randomNumberForColor() {
        return Math.ceil(Math.random() * 255);
    }

    _randomColor() {
        return `rgb(${this._randomNumberForColor()}, ${this._randomNumberForColor()}, ${this._randomNumberForColor()})`
    }

    _changeColor() {
        this.$el.style.backgroundColor = this._randomColor();
    }

    _setHandlers() {
        this.$el.addEventListener('click', this._changeColor.bind(this))
    }

    destroy() {
        super.destroy();
        this.$el.removeEventListener('click', this._changeColor());
    }
}