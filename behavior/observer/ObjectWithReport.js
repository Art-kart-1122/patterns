const ObserverList = require('./ObserverList');

class ObjectWithReport {
    constructor() {
        this.observers = new ObserverList();
    }

    addObservers(type, ...observers) {
        this.observers.add(type, ...observers);
        return this
    }

    removeObservers(type, ...observers) {
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

module.exports = ObjectWithReport;