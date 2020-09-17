import {NormalState} from "./States.mjs";

function getTemplate() {
    return `<div><button>click me</button></div>`
}

export class Element {
    constructor(selector) {
        this.$el = document.querySelector(selector);
        this.state = new NormalState(this);

        this._render();
        this._setupListener();
    }

    setState(state) {
        this.state = state;
    }

    setButtonText(text) {
        this.$el.querySelector('button').innerText = text;
    }

    setStyle(style) {
        this.$el.style = style;
        this._removeListener();
        this._setupListener();
    }

    _render() {
        this.$el.innerHTML = getTemplate();
    }

    _setupListener() {
        this.$el.addEventListener('click', this.state.click.bind(this.state));
        this.$el.addEventListener('dbclick', this.state.dbclick.bind(this.state));
    }

    _removeListener() {
        this.$el.removeEventListener('click', this.state.click);
        this.$el.removeEventListener('dbclick', this.state.dbclick);
    }

    destroy() {
        this._removeListener()
        this.$el.innerHTML = '';
    }


}