class Performer {
    constructor(orientedPrice, timeInterval, quality) {
        this.orientedPrice = orientedPrice;
        this.timeInterval = timeInterval;
        this.quality = quality;
    }

    getServiceConditions() {
        throw new Error('This method must be implement')
    }

    execute() {
        throw new Error('This method must be implement')
    }
}

function getTemplate(status)  {
    return `Hello! from ${status} Company ${this.name}.
        We offer you to fulfill your order with conditions :
         Oriented price ~ ${this.orientedPrice},
         Time Interval ~ ${this.timeInterval},
         Quality ~ ${this.quality}`
}



class BeginnerPerformer extends Performer {
    constructor(timeInterval, name) {
        super('< 1000$', timeInterval, 'Score 60 - 75 ');
        this.name = name;
    }

    getServiceConditions() {
        return getTemplate.call(this, 'beginner')
    }

    execute() {
        return `Beginners got to work`
    }
}

class ProfessionalPerformer extends Performer {
    constructor(timeInterval, name) {
        super('1000 - 2000$', timeInterval, 'Score 75 - 90 ');
        this.name = name;
    }

    getServiceConditions() {
        return getTemplate.call(this, 'professional')
    }

    execute() {
        return `Professionals got to work`
    }
}

class ExpertPerformer extends Performer {
    constructor(timeInterval, name) {
        super('> 2000$', timeInterval, 'Score 90 - 100 ');
        this.name = name;
    }

    getServiceConditions() {
        return getTemplate.call(this, 'experts')
    }

    execute() {
        return `Experts got to work`
    }
}


module.exports = {
    BeginnerPerformer,
    ProfessionalPerformer,
    ExpertPerformer
}