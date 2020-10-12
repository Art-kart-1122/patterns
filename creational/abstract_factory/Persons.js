// This code violates principle "DRY" for the example pattern implementation

const Memory = require('./util/Memory');


class Person {
    constructor() {
        this.id = Date.now();
        this.memory = new Memory();
    }

    getResultOfWork(task) {
        const knowledge  = this.memory.search(task);

        return knowledge ? `I did it by knowledge : ${knowledge.join('\n')}`:
            'I do not know how to do it'
    }

    learn(task, ...knowledge) {
        return new Promise(resolve => {

            setTimeout(() => {
                this.memory.remember(task, ...knowledge);
                resolve(this);
            }, 0)
        })
    }
}


class SecurityPerson extends Person {

    constructor() {
        super();
        this.status = 'Security';
    }

    _verifyTask(task) {
        if(!(task && typeof task === 'string')) throw new Error('Task must be exist')

        return task.split('_').includes('security')
    }

    getResultOfWork(task) {
        return `I am ${this.status} and my task: ${task}\n ${super.getResultOfWork(task)}`
    }

    learn(task, ...knowledge) {
        if(!this._verifyTask(task)) throw new Error('This is not my responsibility')

        const timeForLearning = knowledge.length * 1000;
        return new Promise(resolve => {

            setTimeout(() => {
                this.memory.remember(task, ...knowledge);
                resolve(this)
            }, timeForLearning)
        })
    }
}

class AnalystPerson extends Person {
    constructor() {
        super();
        this.status = 'Analyst';
    }

    _verifyTask(task) {
        if(!(task && typeof task === 'string')) throw new Error('Task must be exist')

        return task.split('_').includes('analyst')
    }

    getResultOfWork(task) {
        if(!this._verifyTask(task)) throw new Error(`I am ${this.status}. This is not my responsibility`)

        return `I am ${this.status} and my task: ${task}\n ${super.getResultOfWork(task)}`
    }

    learn(task, ...knowledge) {
        if(!this._verifyTask(task)) throw new Error('This is not my responsibility')

        const timeForLearning = knowledge.length * 500;
        return new Promise(resolve => {

            setTimeout(() => {
                this.memory.remember(task, ...knowledge);
                resolve(this);
            }, timeForLearning)
        })
    }
}

module.exports = {
    Person,
    SecurityPerson,
    AnalystPerson
}