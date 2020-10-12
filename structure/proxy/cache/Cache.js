class Cache {

    store = {}

    _getElementsByType(type) {
        const elements = this.store[type];
        return elements ? elements : []
    }

    _setElementsByType(type = '', elements = []) {
        if(!type) return this.store

        if(typeof type === 'string') {
            this.store[type] = elements;
            return this.store
        } else {
            throw new Error('type must be a string')
        }
    }

    getElementsByType(type) {
        if(!type) return []

        return this._getElementsByType(type)
    }

    add(type, ...newElements) {
        if (!newElements) return this

        const elements = this._getElementsByType(type);
        this._setElementsByType(type, [...elements, ...newElements]);
        return this

    }

    remove(type, ...oldElements) {
        if (!oldElements) return this

        const elements = this._getElementsByType(type);
        this._setElementsByType(type, elements.filter(el => !oldElements.map(el => el.id).includes(el.id)));
        return this
    }
}

module.exports = Cache;