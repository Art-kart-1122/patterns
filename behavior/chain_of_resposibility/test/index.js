const Container = require('../Container');
const Component = require('../Component');

const button1 = new Component();
const button2 = new Component();

//or inherit Container
const dialog = new Container();
const panel = new Container();

panel.add(button1, button2).setTooltipText('Panel');

button1.showHelp();

dialog.add(panel).setTooltipText('Dialog');

button1.showHelp();

panel.removeTooltipText();

button1.showHelp();

dialog.removeTooltipText();

button1.showHelp();
