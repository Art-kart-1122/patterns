class Singleton {
    static singleObject = null;

    constructor(key) {
        if(key !== 'I am static method') throw new Error('Use method Singleton.getInstance')
        if(Singleton.singleObject) throw new Error('Object already exist. Use method Singleton.getInstance')
        //some constructor
        this.data = 'singleton';
    }

    static getInstance() {
        if(!this.singleObject) this.singleObject = new Singleton('I am static method')
        return this.singleObject
    }
}

console.log(Singleton.getInstance() === Singleton.getInstance())

const CounterModule = (function () {
    let instance, counter = 0;

    const increment = () => {
        counter++
    }

    const getCounter = () => counter
    const createInstance = () => ({getCounter, increment})

    return {
        getInstance: () => instance || (instance = createInstance())
    }
})()

CounterModule.getInstance().increment();
CounterModule.getInstance().increment();

console.log(CounterModule.getInstance().getCounter())

