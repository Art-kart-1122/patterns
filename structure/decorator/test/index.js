const path = require('path');
const File = require('../File');
const Encrypt = require('../FileDecorator');


const pathFile = path.resolve(__dirname, 'text.txt');

const file = new File(pathFile);

file.write('Decorator Pattern');
console.log(file.read());

// wrap decorator
const encryptFile = new Encrypt(file);

encryptFile.write('Decorator Pattern');
console.log(encryptFile.read())