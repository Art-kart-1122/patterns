const {SimpleIterator, RandomIterator} = require('./ObjectIterators')

class ObjectCollection {
    items = [];

    getItems() {
        return this.items
    }

    getCount() {
        return this.items.length
    }

    addItems(...items) {
        this.items = [...this.items, ...items];
        return this
    }

    getIterator() {
        return new SimpleIterator(this)
    }

    getRandomIterator() {
        return new RandomIterator(this)
    }
}

module.exports = ObjectCollection;