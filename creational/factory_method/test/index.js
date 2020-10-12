const SearchCompany = require('../PerformerSearchCompany');

const JopSearchCompany = new SearchCompany();

const performerBegin = JopSearchCompany.getPerformer('beginner');
const performProf = JopSearchCompany.getPerformer('professional');
const performEx = JopSearchCompany.getPerformer('expert');

console.log(performerBegin.getServiceConditions())
console.log(performerBegin.execute())

