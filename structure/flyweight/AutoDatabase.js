
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

    printRecord(limit) {
        for(let idx = 0; i < limit; i++) {
            this._getInfo(this.database[i]);
        }
        return this
    }
}

module.exports = AutoDatabase;