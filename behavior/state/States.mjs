export class NormalState {
    constructor(context) {
        this.context = context;
    }

    click() {
        const style = `background: green`;
        this.context.setStyle(style);
        this.context.setButtonText('normal');
    }

    dbclick() {
        const style = `background: yellow`;
        this.context.setStyle(style);
        this.context.setButtonText('change to warning state');
        this.context.setState(new WarningState(this.context));
    }

}

export class WarningState {
    constructor(context) {
        this.context = context;
    }

    click() {
        const style = `background: red`;
        this.context.setStyle(style);
        this.context.setButtonText('warning');
    }

    dbclick() {
        const style = `background: orange`;
        this.context.setStyle(style);
        this.context.setButtonText('change to normal state');
        this.context.setState(new NormalState(this.context));
    }

}