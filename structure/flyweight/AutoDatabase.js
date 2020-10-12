
class AutoDatabase {
    //database emulation
    database = [];

    addAutoToDatabase(autoFactory, plates, owner, brand, model, color) {

        const autoBase = autoFactory.getAuto({brand, model, color});

        this.database.push({
            auto: autoBase,
            owner,
            plates
        })
        return this
    }

    _getInfo(obj) {
        return ` ${obj.auto.getInfo()}
        Owner : ${obj.owner}
        Plates : ${obj.plates}`
    }

    printRecord(limit = this.database.length) {
        if(limit < 0) throw new Error('limit must be more 0 ')

        limit = limit > this.database.length ? this.database.length : limit;

        for(let idx = 0; idx < limit; idx++) {
            console.log(this._getInfo(this.database[idx]));
        }
        return this
    }
}

module.exports = AutoDatabase;