const {Bank, Police, Hospital} = require('./DataSources');

//facade class

class CityDataSource {
    constructor(bank, hospital, police) {
        this.bank = bank;
        this.hospital = hospital;
        this.police = police;
    }

    //....
    //other methods
    //.....

    isBadCandidate(name) {
       return this.bank.hasBacklog(name) || this.police.hasNegativeAccident(name) || this.hospital.hasCriticalIllnesses(name)
    }
}

module.exports = CityDataSource;