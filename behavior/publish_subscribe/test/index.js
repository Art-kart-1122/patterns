const path = require('path');
const Store = require('../../observer/test/class/Store');
const File = require('./class/File');


const myFile = new File(path.resolve(__dirname, '../../observer/test', 'myFile.txt'));

const allStore = new Store();
const errorStore = new Store();

myFile.EventManager
    .subscribe('Successful', allStore, errorStore)
    .unsubscribe('Successful', errorStore);

myFile.read();