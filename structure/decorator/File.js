const fs = require('fs');

class File {
    constructor(path) {
        this.path = path;
    }

    read() {
        return fs.readFileSync(this.path,'binary');
    }

    write(contents) {
        fs.writeFileSync(this.path, contents, 'binary');
    }
}

module.exports = File;