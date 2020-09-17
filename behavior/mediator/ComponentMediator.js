function randomNumber(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

class ComponentMediator {

    constructor(...components) {
        this.components = components;
        this.components.forEach(component => component.setMediator(this));
    }

    notify(sender, event) {
        switch (event) {
            case 'all' : {
                this.components.forEach(component => component.log({message: `Hello from ${sender.name}`}));
                break;
            }
            case 'random' : {
                this.components[randomNumber(0, this.components.length)]
                    .log({message: `Hello from ${sender.name}`});
                break;
            }
        }
    }
}

module.exports = ComponentMediator;