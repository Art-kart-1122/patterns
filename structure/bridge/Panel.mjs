function getTemplate(data = []) {
    const buttons = data.map(el => `<div class="button" data-value="${el.value}">${el.name}</div>`);

    return `<div class="panel">
    <div class="panel-control">
        <div class="button control-button">o</div>
    </div>
    <div class="panel-button">${buttons.join('')}</div>
    <div class="panel-logo">JOPO - JOPO</div>
</div>`
}


export class Panel {
    constructor(selector, device, options) {
        this.device = device;
        this.$el = document.querySelector(selector);
        this._render(options);
        this._setup();
    }

    _render(options) {
        this.$el.innerHTML = getTemplate(options);
    }

    _buttonClick(e) {
        this.device.clickButton(e.target.dataset.value);
    }

    _controlButtonClick() {
        this.device.clickEnable();
    }

    _setup() {
        const $controlButton = this.$el.querySelector('.control-button');
        const $buttonPanel = this.$el.querySelector('.panel-button');

        $controlButton.addEventListener('click', this._controlButtonClick.bind(this));
        $buttonPanel.addEventListener('click', this._buttonClick.bind(this));
    }

    destroy() {
        const $controlButton = this.$el.querySelector('.control-button');
        const $buttonPanel = this.$el.querySelector('.panel-button');

        $controlButton.removeEventListener('click', this._controlButtonClick.bind(this));
        $buttonPanel.removeEventListener('click', this._buttonClick.bind(this));

        this.$el.innerHTML = '';
    }


}