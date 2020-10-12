
//flyweight
class AutoBase {
    constructor(sharedState) {
        this.sharedState = sharedState;
    }

    getState() {
        return this.sharedState
    }

    getInfo() {
        const info = this.sharedState.split('_');
        return `Auto : ${info.join(' ')}`
    }
}

//flyweight factory
class AutoFactory {
    autoCatalog = [];

    constructor(...autoObjects) {
        autoObjects.forEach(auto => {
            this.getAuto(auto);
        })
    }

    getAuto({brand, model, color}) {
        const sharedState = this._getKey(brand, model, color);
        const auto = this.autoCatalog.find( auto => auto.getState() === sharedState);

        if(!auto) {
            const newAuto = new AutoBase(sharedState);
            this.autoCatalog.push(newAuto);
            return newAuto
        } else {
            return auto
        }
    }

    _getKey(brand, model, color) {
        return [brand, model, color].join('_')
    }
}


module.exports = AutoFactory