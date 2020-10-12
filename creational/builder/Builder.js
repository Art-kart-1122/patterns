//conceptual example

class Builder {

    constructor() {
        this.product = this._getNewProductForBuilder();
    }

    _getNewProductForBuilder() {
        return {
            partA: {isReady: false, data:''},
            partB: {isReady: false, data:''},
            partC: {isReady: false, data:''}
        }
    }

    _isCorrectData(data) {
        return typeof data === 'string' && data !== ''
    }

    _isCorrectCreationStage(partName) {
        if(!Object.keys(this.product).includes(partName.toString())) throw new Error('Part name is incorrect')

        switch (partName) {
            case 'partA' : {
                return !this.product.partA.isReady
            }
            case 'partB' : {
                return !this.product.partB.isReady && this.product.partA.isReady
            }
            case 'partC' : {
                return !this.product.partC.isReady && this.product.partB.isReady
            }
        }
    }

    _verify(partName = '', data) {
        if(!this._isCorrectData(data)) throw new Error('Data must be a string')
        if(! this._isCorrectCreationStage(partName)) throw new Error('Creation stage is incorrect')
    }

    setPartA(data = '') {
        this._verify('partA', data);
        //other logic .....
        data = data.toUpperCase();
        //
        this.product.partA = {isReady: true, data}
        return this
    }

    setPartB(data = '') {
        this._verify('partB', data);
        //other logic .....
        data = data.toLowerCase();
        //
        this.product.partB = {isReady: true, data}
        return this
    }

    setPartC(data = '') {
        this._verify('partC', data);
        //other logic .....
        this.product.partC = {isReady: true, data}
        return this
    }

    getProduct() {
        const product = this.product;
        if(!(product.partA.isReady && product.partB.isReady &&
                product.partC.isReady)) throw new Error('Product is not ready')

        this.product = this._getNewProductForBuilder();
        return {
            product: product.partA.data + product.partB.data + product.partC.data
        }
    }
}

module.exports = Builder;