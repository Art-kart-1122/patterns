const fs = require('fs');
const ObjectWithReport = require('../../ObjectWithReport');


class File extends ObjectWithReport {
    constructor(path) {
        super();
        this.path = path;
    }

    read() {
        fs.readFile(this.path, 'utf8',
            (err, contents) => {
            if(err) {
                this.notify('Error', this.path)
                console.log(err);
            } else {
                this.notify('Successful', this.path);
                console.log(contents);
            }
        });
    }
    // other methods

}

module.exports = File