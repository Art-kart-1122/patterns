import {WarningElement} from "../WarningElement.mjs";
import {ErrorElement} from "../ErrorElement.mjs";


const warning = new WarningElement('#warn-el');
warning.create();

const error = new ErrorElement('#err-el');
error.create();