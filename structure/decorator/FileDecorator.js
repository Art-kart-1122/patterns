const Cipher = require('./Cipher');

class FileDecorator {
    constructor(element) {
        this.file = element;
    }

     read () {
        return this.file.read()
    }

    write(contents) {
        this.file.write(contents);
    }

}

class Encrypt extends FileDecorator {
    constructor(element) {
        super(element);
        this.cipher = new Cipher('camellia-192-cfb', 'password', 16);
    }

    read() {
        const encrypted = super.read();
        return this.cipher.decrypt(encrypted, 'binary')
    }

    write(contents) {
        const encrypted = this.cipher.crypt(contents, 'binary');
        super.write(encrypted);
    }
}

module.exports = Encrypt;