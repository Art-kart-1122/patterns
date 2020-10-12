const CacheWithTime = require('./cache/CacheWithTime');

//proxy class
class CachedOpenWeather {

    store = new CacheWithTime(10000);

    constructor(openWeather) {
        this.openWeather = openWeather;
    }

    getCurrentWeatherByCityName = async (city) => {
        const storeType = "CurrentWeatherByCityName";
        const data = this.store.getElement(storeType, city);

        if(Object.keys(data).length) return data.value

        const newData = await this.openWeather.getCurrentWeatherByCityName(city);
        this.store.add(storeType, city, newData);
        return newData
    }
    // other method
    //..........
    //........
}

module.exports = CachedOpenWeather;