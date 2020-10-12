const https = require('https');


class ApiOpenWeather {

    domain = 'api.openweathermap.org';
    source = '/data/2.5/';
    API_KEY = process.env.API_KEY;

    requestGET = async (queryString) => {
        const reqStr = `https://${this.domain + this.source + queryString}&appid=${process.env.API_KEY}`;
        return new Promise(resolve => {
            https.get(reqStr,  (res) => {

                let data = [];

                res.on('error', err => {
                    console.log(err);
                });

                res.on('data', chunk => {
                    data.push(chunk)
                });

                res.on('end', () => {
                    resolve(JSON.parse(Buffer.concat(data).toString()));
                });
            });
        });
    }

    //async requestPOST() {....}
    //...........
    //other methods
}

module.exports = ApiOpenWeather;