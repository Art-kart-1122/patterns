const fs = require('fs');

const Editor = require('../../Editor');
const EventManager = require('../../EventManager');


class File extends Editor {
    constructor(path) {
        super();
        this.path = path;
        this.EventManager = new EventManager();
    }

    read() {
        fs.readFile(this.path, 'utf8',
            (err, contents) => {
                if(err) {
                    this.EventManager.notify('Error', this.path)
                    console.log(err);
                } else {
                    this.EventManager.notify('Successful', this.path);
                    console.log(contents);
                }
            });
    }
    // other methods

}

module.exports = File;