class Shipping {
    route = { dispatchPoint: null, destinationPoint: null };
    dimensions = {weight: 0 , width: 0, length: 0, height: 0 };
    deliveryCompany = null;

    setRoute({dispatchPoint, destinationPoint}) {
        this.route = {dispatchPoint, destinationPoint};
        return this
    }

    setDimensions({weight, width, length, height}) {
        this.dimensions = {weight, width, length, height};
        return this
    }

    setDeliveryCompany(company) {
        this.deliveryCompany = company;
        return this
    }

    getPrice() {
        const company = this.deliveryCompany;
        const price = company?.calculate(this.route, this.dimensions);

        return price ? price : 0
    }
}

module.exports = Shipping;