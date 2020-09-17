
export class Element {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }

    _getHtml() {
        return `<h2>Element</h2>`
    }

    _addStyle() {
        this.$el.classList.add('element')
    }

    _display(html) {
        this.$el.innerHTML = html;
    }

    _setHandlers() {}

    //template method
    create() {
        const html = this._getHtml();
        this._display(html);
        this._addStyle();
        this._setHandlers();
    }

    destroy() {
        this.$el.innerHTML = '';
    }
}

