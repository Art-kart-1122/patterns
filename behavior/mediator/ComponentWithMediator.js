
class ComponentWithMediator {

    constructor( mediator = null) {
        this.mediator = mediator;
    }

    setMediator(mediator) {
        this.mediator = mediator;
        return this
    }
}

module.exports = ComponentWithMediator;


