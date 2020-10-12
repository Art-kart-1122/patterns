class Component {
    container = null;

    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    setContainer(container) {
        this.container = container;
        return this
    }

    removeContainer() {
        this.container = null;
    }

    getValue() {
        return [this.value]
    }

    isComposite() {
        return false
    }
}

module.exports = Component;