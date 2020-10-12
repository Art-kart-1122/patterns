const fs = require('fs');

class FileWriter {
    constructor(pathToFile, Chiper) {
        this.pathToFile = pathToFile;
        this.chiper = Chiper;
    }

    write(data, outputEncoding) {
        this.chiper.setData(data);
        const cryptData = this.chiper.getCryptData(outputEncoding);

        fs.writeFile(this.pathToFile, cryptData, outputEncoding,
            (err) => {
                if(err) throw new Error(err)
            })
    }
}

module.exports = FileWriter;