const {Bank, Background, Credit} = require('./DataSources');

//facade class

class  {

    applyFor(name) {
        const isGoodClient  = new Bank().verify(name) && new Credit().get(name) && new Background().check(name)

        return
    }
}

module.exports = Mortage;