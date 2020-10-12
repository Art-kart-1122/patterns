// This code violates principle "DRY" for the example pattern implementation
const {Person, SecurityPerson, AnalystPerson} = require('./Persons');

class Department {
    types = ["beginner", "professional", "expert"];

    _verifyTypeEmployee(type) {
        return this.types.includes(type)
    }

    getEmployee(type) {
        if (!this._verifyTypeEmployee(type)) throw new Error('Type is incorrect')

        return new Person()
    }
}


class SecurityDepartment extends Department{
    getEmployee(type) {
        if (!this._verifyTypeEmployee(type)) throw new Error('Type is incorrect')

        switch (type) {
            case "beginner": {
                return new SecurityPerson()
                    .learn('security_1', '1')
            }
            case "professional": {
               return new SecurityPerson()
                   .learn('security_1', '1')
                   .then(person => person.learn('security_2', '2'))
            }
            case "expert": {
                return new SecurityPerson()
                    .learn('security_1', '1')
                    .then(person => person.learn('security_2', '2'))
                    .then(person => person.learn('security_3', '3'))
            }
        }
    }
}

class AnalyticsDepartment extends Department{
    getEmployee(type) {
        if (!this._verifyTypeEmployee(type)) throw new Error('Type is incorrect')

        switch (type) {
            case "beginner": {
                return new AnalystPerson()
                    .learn('analyst_1', '1')
            }
            case "professional": {
                return new AnalystPerson()
                    .learn('analyst_1', '1')
                    .then(person => person.learn('analyst_2', '2'))
            }
            case "expert": {
                return new AnalystPerson()
                    .learn('analyst_1', '1')
                    .then(person => person.learn('analyst_2', '2'))
                    .then(person => person.learn('analyst_3', '3'))
            }
        }
    }
}

module.exports = {
    Department,
    SecurityDepartment,
    AnalyticsDepartment
}