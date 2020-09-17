const ComponentMediator = require('../ComponentMediator');
const ComponentWithReport = require('./ComponentWithReport');



const obj1 = new ComponentWithReport('obj1');
const obj2 = new ComponentWithReport('obj2');
const obj3 = new ComponentWithReport('obj3');

const mediator = new ComponentMediator(obj1, obj2, obj3);

obj1.reportAll()

obj2.reportRandom()
