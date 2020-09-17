const DeliveryCompany = require('../../DeliveryCompany');

class NovaPoshta extends DeliveryCompany {

    constructor(name) {
        super(name);
    }

    priceToDimensions = {weight: 10 , width: 20, length: 40, height: 50 };
    priceToDistance = 0.5;

    getDistancePrice({dispatchPoint, destinationPoint}) {
        return Math.abs(dispatchPoint.location - destinationPoint.location) *  this.priceToDistance
    }

    getDimensionsPrice(dimensions) {
        let price = 0;
        for(let i in this.priceToDimensions) {
            price+= this.priceToDimensions[i] * dimensions[i];
        }
        return price
    }

    calculate(route, dimensions) {
        return this.getDistancePrice(route) + this.getDimensionsPrice(dimensions)
    }
}

module.exports = NovaPoshta;