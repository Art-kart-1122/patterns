const Observer = require('../../Observer');

class Store extends Observer {

    log = [];

    update(log) {
        this.log.push(log);
        this.report();
        return this
    }

    report() {
        this.log.forEach(row => console.log(row));
        return this
    }
}

module.exports = Store;