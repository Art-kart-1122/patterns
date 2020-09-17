class Component {

    #tooltipText ;
    #container = null;

    setTooltipText(text) {
        this.#tooltipText = text;
        return this
    }

    removeTooltipText() {
        this.#tooltipText = undefined;
        return this
    }

    setContainer(container) {
        this.#container = container;
        return this
    }

    removeContainer() {
        this.#container = null;
        return this
    }

    getContainer() {
        return this.#container
    }

    getTooltipText() {
        return this.#tooltipText
    }

   showHelp() {
        const helpText = this.#tooltipText
        helpText ? console.log(helpText) : this.#container?.showHelp()
    }
}

module.exports = Component;
