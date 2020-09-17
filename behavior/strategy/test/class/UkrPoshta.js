const DeliveryCompany = require('../../DeliveryCompany');

class UkrPoshta extends DeliveryCompany {

    constructor(name) {
        super(name);
    }

    priceToDimensions = {weight: 8 , width: 15, length: 30, height: 50 };
    priceToDistance = 0.5;

    getDistancePrice({dispatchPoint, destinationPoint}) {
        const price = Math.abs(dispatchPoint.location - destinationPoint.location) *  this.priceToDistance;
        return price + (price * 0.02)
    }

    getDimensionsPrice(dimensions) {
        let price = 0;
        for(let i in this.priceToDimensions) {
            price+= this.priceToDimensions[i] * dimensions[i];
        }
        return price + (price * 0.02)
    }

    calculate(route, dimensions) {
        return this.getDistancePrice(route) + this.getDimensionsPrice(dimensions)
    }
}

module.exports = UkrPoshta;