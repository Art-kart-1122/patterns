const Shipping = require('../Shipping');
const UkrPoshta = require('./class/UkrPoshta');
const NovaPoshta = require('./class/NovaPoshta');
const City = require('./class/City');

const newShipping = new Shipping();

newShipping.setRoute({dispatchPoint: new City('Kyiv', 230),
                    destinationPoint: new City('Odessa', 100)})
    .setDimensions({weight: 2, width: 0.5, length: 1, height: 0.5})
    .setDeliveryCompany(new UkrPoshta('department  № 2'))

console.log(newShipping.getPrice())

newShipping.setDeliveryCompany(new NovaPoshta('department №54'))

console.log(newShipping.getPrice())