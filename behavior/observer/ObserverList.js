const Observer = require('./Observer');

class ObserverList {

    observerStore = {}


    _getObserversByType(type) {
        const observers = this.observerStore[type];
        return observers ? observers : []
    }

    _setObserversByType(type = '', observers = []) {
        if(!type) return this.observerStore

        if(typeof type === 'string') {
            this.observerStore[type] = observers;
            return this.observerStore
        } else {
            throw new Error('type must be a string')
        }
    }

    getByType(type) {
        if(!type) return []

        return this._getObserversByType(type)
    }

    add(type, ...newObservers) {
        if (!newObservers) return this

        const observers = this._getObserversByType(type);
        this._setObserversByType(type, [...observers, ...newObservers]);
        return this

    }

    remove(type, ...oldObservers) {
        if (!oldObservers) return this

        const observers = this._getObserversByType(type);
        this._setObserversByType(type, observers.filter(el => !oldObservers.includes(el)));
        return this
    }
}

module.exports = ObserverList