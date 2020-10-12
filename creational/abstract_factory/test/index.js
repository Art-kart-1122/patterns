const {AnalyticsDepartment, SecurityDepartment} = require('../Departments');

const jopSecurityDepartment = new SecurityDepartment();
const jopAnalyticsDeportment = new AnalyticsDepartment();

const mySecurityOrder = jopSecurityDepartment.getEmployee("professional");
const myAnalystOrder = jopAnalyticsDeportment.getEmployee("expert");

Promise.all([mySecurityOrder, myAnalystOrder]).then(([security, analyst]) => {
    console.log(security.getResultOfWork('security_1'));
    console.log(analyst.getResultOfWork('analyst_3'));
})


