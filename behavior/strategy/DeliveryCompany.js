class DeliveryCompany {
    constructor(name) {
        this.name = name
    }
    priceToDimensions = {weight: 0 , width: 0, length: 0, height: 0 };
    priceToDistance = 0;

    setPriceToDimensions({weight, width, length, height}) {
        this.priceToDimensions = {weight, width, length, height};
        return this
    }

    setPriceToDistance(price) {
        this.priceToDistance = price;
        return this
    }

    calculate() {}
}


module.exports = DeliveryCompany;