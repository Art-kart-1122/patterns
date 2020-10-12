const {BeginnerPerformer, ExpertPerformer, ProfessionalPerformer} = require('./Performers');

class PerformerSearchCompany {
    store = {
        "Beginner": [
            {company: new BeginnerPerformer('2 month', 'JOPbeg'), isActually: false},
            {company: new BeginnerPerformer('2.5 month', 'JOPbeg2'), isActually: true},
            {company: new BeginnerPerformer('2 month', 'JOPbeg3'), isActually: false},
        ],
        "Professional": [
            {company: new ProfessionalPerformer(' 1 month','JOPprof'), isActually: true},
            {company: new ProfessionalPerformer(' 1.5 month','JOPprof2'), isActually: true}
        ],
        "Expert" : [
            {company: new ExpertPerformer('1 month', 'JOPex'), isActually: true}
        ]
    }

    getPerformer(type) {
        switch (type) {
            case "beginner": {
                const actuallyRecord = this.store.Beginner.find(company => company.isActually);
                return actuallyRecord.company
            }
            case "professional": {
                const actuallyRecord = this.store.Professional.find(company => company.isActually);
                return actuallyRecord.company
            }
            case "expert": {
                const actuallyRecord = this.store.Expert.find(company => company.isActually);
                return actuallyRecord.company
            }
        }
    }
}

module.exports = PerformerSearchCompany;