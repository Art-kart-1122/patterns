const Component = require('./Component');

class Container extends Component {
    #children = []

    add(...newComponent) {
        if(!newComponent) return this

        newComponent.forEach(component => component.setContainer(this));
        this.#children = this.#children.concat(newComponent);
        return this
    }

    remove(...oldComponent) {
        if(!oldComponent) return this

        const pureOldComponent = this.#children
            .filter(component => oldComponent.includes(component))
            .forEach(component => component.removeContainer())

        this.add(this.#children.filter(component => !pureOldComponent.includes(component)));
        return this
    }

}
module.exports = Container;