const Component = require('./Component')

class Composite extends Component {
    childComponent = [];

    constructor(name, value, ...childComponent) {
        super(name, value);
        this.add(...childComponent);
    }

    add(...newComponent) {
        if(!newComponent) return this

        newComponent = this._deleteDublicate(newComponent);
        newComponent.forEach(component => component.setContainer(this));
        this.childComponent = this.childComponent.concat(newComponent);
        return this
    }

    remove(...oldComponent) {
        if(!oldComponent) return this

        const pureOldComponent = this.childComponent
            .filter(component => oldComponent.includes(component))
            .forEach(component => component.removeContainer())

        this.add(this.childComponent.filter(component => !pureOldComponent.includes(component)));
        return this
    }

    getValue() {
        const valueArr = super.getValue();
        this.childComponent.forEach(el => {
            valueArr.push(...el.getValue());
        });
        return valueArr
    }

    _deleteDublicate(arr) {
        return Array.from(new Set(arr))
    }
}

module.exports = Composite;