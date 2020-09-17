const ComponentWithMediator = require('../ComponentWithMediator');

class ComponentWithReport extends ComponentWithMediator {
    constructor(name, mediator) {
        super(mediator);
        this.name = name;
    }

    log(data) {
        console.log(`Component ${this.name} got a message: ${data.message}`);
    }

    reportAll() {
        this.mediator.notify(this, 'all');
        return this
    }

    reportRandom() {
        this.mediator.notify(this, 'random');
        return this
    }
}

module.exports = ComponentWithReport;