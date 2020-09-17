const crypto = require('crypto');

class Cipher {
    constructor(algorithm, envPasswordName, ivSize) {
        this.algorithm = algorithm;

        let password = crypto.scryptSync(process.env[envPasswordName], 'salt', 24);
        let iv = Buffer.alloc(ivSize);

        this.cipher = crypto.createCipheriv(this.algorithm, password, iv);
        this.decipher = crypto.createDecipheriv(this.algorithm, password, iv);
    }

    crypt(data, outputEncoding) {
        let encrypted = this.cipher.update(data, 'utf8', outputEncoding);
        encrypted += this.cipher.final(outputEncoding);
        return encrypted
    }

    decrypt(encrypted, inputEncoding) {
        let data = this.decipher.update(encrypted, inputEncoding, 'utf8');
        data += this.decipher.final('utf8');
        return data
    }

}

module.exports = Cipher;

