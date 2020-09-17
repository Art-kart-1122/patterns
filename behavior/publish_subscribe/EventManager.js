const ObserverList = require('../observer/ObserverList');

class EventManager {
    constructor() {
        this.observers = new ObserverList();
    }

    subscribe(type, ...observers) {
        this.observers.add(type, ...observers);
        return this
    }

    unsubscribe(type, ...observers) {
        this.observers.remove(type, ...observers);
        return this
    }

    notify(type, context) {
        this.observers.getByType(type).forEach(observer => {
            observer.update?.(context);
        });
        return this
    }
}

module.exports = EventManager;