const Cipher = require('../../decorator/Cipher');
const CipherAdapter = require('../CipherAdapter');
const FileWriter = require('../FileWriter');

const cipher =  new Cipher('camellia-192-cfb', 'password', 16);

const file = new FileWriter('test.txt', new CipherAdapter(cipher));

file.write('jopo-jopo', 'binary');