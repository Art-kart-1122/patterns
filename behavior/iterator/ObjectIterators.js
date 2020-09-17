class SimpleIterator {
    constructor(collection) {
        this.collection = collection;
        this.position = 0;
    }

    _getNextIndex() {
        const idx = (this.position < this.collection.getCount()) ? this.position : -1;
        this.position += 1;
        return idx
    }

    next() {
        const idx = this._getNextIndex();
        return (idx !== -1) ?
            {value: this.collection.getItems()[idx], done: false} :
            {done: true}
    }

    rewind() {
        this.position = 0;
        return this
    }
}


class RandomIterator {

    constructor(collection) {
        this.collection = collection;

        const indexArr = [...Array(this.collection.getCount()).keys()];
        this.randomIndexArr = this._shuffle(indexArr);

        this.position = 0;
    }

    _shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i + 1);
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr
    }

    _getNextRandomIndex() {
        const idx = (this.position < this.randomIndexArr.length) ? this.randomIndexArr[this.position] : -1;
        this.position += 1;
        return idx
    }

    next() {
        const idx = this._getNextRandomIndex();
        return (idx !== -1) ?
            {value: this.collection.getItems()[idx], done: false} :
            {done: true}
    }

    rewind() {
        this.randomIndexArr = this._shuffle(this.randomIndexArr);
        this.position = 0;
        return this
    }
}

module.exports = {
    SimpleIterator,
    RandomIterator
}