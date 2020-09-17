const Editor = require('../Editor');
const QueueState = require('../QueueState');


const text = new Editor('text');
const historyText = new QueueState(text);

historyText.backup();
text.toLowerCase();

historyText.backup()
text.toHash();
historyText.backup()

historyText.showHistory();

historyText.undo();

historyText.showHistory();

