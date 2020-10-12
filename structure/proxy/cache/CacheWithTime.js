const Cache = require('./Cache');

class CacheWithTime extends Cache {

    constructor(time) {
        super();
        this.timeCached = time;
    }

    getElement(type, id) {
        const element = this.getElementsByType(type).find(el => el.id === id);

        if(!element) return {}

        return this._isActuallyData(element) ? element : {}
    }

    add(type, id, value) {
        const element = this.getElementsByType(type).find(el => el.id === id);
        if (element) super.remove(type, {id});

        super.add(type, {id, value, time: Date.now()})
        return this
    }


    _isActuallyData(element) {
        const result = Math.abs((element.time - Date.now())) < this.timeCached;
        result ? console.log('Data is actually') : console.log('Data does not actually. Request new data .....')
        return result
    }
}

module.exports = CacheWithTime;