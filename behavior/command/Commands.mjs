

class Command {
    constructor(element, store) {
        this.element = element;
        this.store = store;
    }

    execute() {
        throw new Error('This method must be implemented in the inherited class');
    }

    toString() {
        return this.constructor.name
    }
}

export class CopyTextCommand extends Command {
    execute() {
        this.store.addToArchive(this.element.getText());
        return true
    }
}

export class NextTextCommand extends Command {
    execute() {
        this.element.setText(this.store.getNext());
        return true
    }
}





