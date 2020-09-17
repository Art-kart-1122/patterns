import {CopyTextCommand, NextTextCommand} from "./Commands.mjs";

export class Element {
    store = null;
    history = [];

    constructor(selector) {
        this.$el = document.querySelector(selector);
    }

    _addCommandToHistory(record) {
        console.log('History: ' + record);
        this.history.push(record);
    }

    _executeCommand(command) {
        if(command.execute()) this._addCommandToHistory(command.toString())
    }

    _copy() {
        this._executeCommand(new CopyTextCommand(this, this.store));
    }

    _next() {
        this._executeCommand(new NextTextCommand(this, this.store));
    }

    _setup() {
        this.$el.addEventListener('contextmenu', this._copy.bind(this));
        this.$el.addEventListener('click', this._next.bind(this));
    }

    _clear() {
        this.$el.innerHTML = '';
        this.$el.removeEventListener('contextmenu', this._copy);
        this.$el.removeEventListener('click', this._next);
    }

    getText() {
        const text = this.$el.textContent;
        return text ? text : ''
    }

    setText(text) {
        this.$el.innerHTML = text;
        return this
    }

    printHistory() {
        this.history.forEach(el => console.log(el));
    }

    setStore(store) {
        if(this.store) this._clear();

        this.store = store;
        this._setup()
        return this
    }

    destroy() {
       this._clear()
    }

}

