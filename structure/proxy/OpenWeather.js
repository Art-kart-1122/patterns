const ApiOpenWeather = require('./ApiOpenWeather');

class OpenWeather {

    api = new ApiOpenWeather();

    getCurrentWeatherByCityName = async (city) => {
        const queryStr = `weather?q=${city}`;
        const elements = this._getWeatherFromResponse(await this.api.requestGET(queryStr));
        return elements[0] ? elements[0] : {}
    }


    // other method
    //..........
    //........

    _getWeatherFromResponse = (data) => {
        return data.cod === 200 ? data.weather : [];
    }
}

module.exports = OpenWeather;