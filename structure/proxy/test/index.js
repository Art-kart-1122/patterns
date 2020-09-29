const OpenWeather = require('../OpenWeather');
const CachedOpenWeather = require('../CahedOpenWeather');

const serviceWeather = new OpenWeather();
const optimizeServiceWeather = new CachedOpenWeather(serviceWeather);

(async () => {
    await optimizeServiceWeather.getCurrentWeatherByCityName('Kyiv').then(console.log);
    await optimizeServiceWeather.getCurrentWeatherByCityName('Kyiv').then(console.log);
    await optimizeServiceWeather.getCurrentWeatherByCityName('Odesa').then(console.log);
    await optimizeServiceWeather.getCurrentWeatherByCityName('London').then(console.log);

    await new Promise(resolve =>  {
        setTimeout(resolve, 20000)
    });
    await optimizeServiceWeather.getCurrentWeatherByCityName('Kyiv').then(console.log);
})()
