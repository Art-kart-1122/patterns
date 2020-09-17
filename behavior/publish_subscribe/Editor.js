const EventManager = require('./EventManager');

class Editor {
    constructor() {
        this.events = new EventManager();
    }

}
module.exports = Editor;