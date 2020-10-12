const Builder = new (require('../Builder'));

//console.log(Builder.setPartA('PartA').setPartB('PartB').setPartC('PartC').getProduct())

function emulationSomeWorkWithBuilder(builder) {
    new Promise(resolve => {

        setTimeout(() => {
            resolve(builder.setPartA('PartA'))
        }, 1000)

    }).then(builder => {

        return new Promise(resolve => {

            setTimeout(() => {
                resolve(builder.setPartB('PartB'))
            }, 1000)

        })
    }).then(builder => builder.setPartC('PartC'))
}

function getProduct(builder) {

    try {
        console.log(builder.getProduct())
    } catch (e) {
        console.log(e);
        setTimeout(() => getProduct(builder), 1000)
    }
}

emulationSomeWorkWithBuilder(Builder);
getProduct(Builder);