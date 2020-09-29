function getTemplate(data = []) {
    const buttons = data.map(el => `<div class="button" value="${el.value}">${el.name}</div>`);

    return `<div class="panel">
    <div class="panel-control">
        <div class="panel-button-control">o</div>
    </div>
    ${buttons}
    <div class="panel-button"></div>
    <div class="panel-logo"></div>
</div>`
}


export class Panel {
    constructor(selector, device) {
        this.device = device;
        this.$el = document.querySelector(selector);
        this._render();
    }

    _render() {
        this.$el.innerHTML = getTemplate();
    }

    _buttonClick(e) {
        this.device.buttonClick(e.target.value);
    }

    _controlButtonClick() {
        this.device.controlButtonClick();
    }

    _setup() {
        const $controlButton = this.$el.querySelector('.panel-button-control');
        const $buttonPanel = this.$el.querySelector('.panel-button');

        $controlButton.addEventListener('click', this._controlButtonClick.bind(this));
        $buttonPanel.addEventListener('click', this._buttonClick.bind(this));
    }

    destroy() {
        const $controlButton = this.$el.querySelector('.panel-button-control');
        const $buttonPanel = this.$el.querySelector('.panel-button');

        $controlButton.removeEventListener('click', this._controlButtonClick.bind(this));
        $buttonPanel.removeEventListener('click', this._buttonClick.bind(this));

        this.$el.innerHTML = '';
    }


}