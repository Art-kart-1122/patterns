class CipherAdapter {
    data = '';

    constructor(Cipher) {
        this.cipher = Cipher;
    }

    setData(data) {
        this.data = data;
    }

    getCryptData(outputEncoding) {
        if(!this.data) throw new Error('Data not specified')

        return this.cipher.crypt(this.data, outputEncoding)
    }
}

module.exports = CipherAdapter;