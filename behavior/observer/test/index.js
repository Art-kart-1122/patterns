const path = require('path');
const Store = require('./class/Store');
const File = require('./class/File');


const myFile = new File(path.resolve(__dirname, 'myFile.txt'));

const allStore = new Store();
const errorStore = new Store();

myFile.addObservers('Error', allStore, errorStore);
myFile.addObservers('Successful', allStore);

myFile.read();
