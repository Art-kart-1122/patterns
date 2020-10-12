import {Panel} from "../Panel.mjs";
import {Monitor} from "../Monitor.mjs";

const buttons = [
    {name : '1', value: '1'},
    {name : '2', value: '2'},
    {name : '3', value: '3'},
    {name : '4', value: '4'},
    {name : '5', value: '5'},
];

const monitor = new Monitor('#monitor');
const panel = new Panel('#panel', monitor, buttons);


