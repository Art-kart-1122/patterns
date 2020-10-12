const {Bank, Police, Hospital} = require('../DataSources');
const CityDataSource = require('../CityDataSource');


const jopoCity = new CityDataSource(new Bank(), new Hospital(), new Police());

console.log(jopoCity.isBadCandidate('Jopo Jopovich'))
