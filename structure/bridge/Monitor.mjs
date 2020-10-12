function getTemplate() {
    return `<div class="TV">
    <div class="TV-monitor"></div>
    <div class="panel-logo">JOPO - JOPO</div>
    <div class="TV-panel">
        <div class="panel-control">
            <div class="panel-button control">o</div>
        </div>
    </div>
</div>`
}

export class Monitor {
    constructor(selector) {
        this.$el = document.querySelector(selector);
        this.isEnabled = false;
        this._render();
    }

    _render() {
        this.$el.innerHTML = getTemplate();
    }

    clickButton(value) {
        this.isEnabled ?
            this.$el.querySelector(".TV-monitor").innerText = value :
            console.log('Device is off');

        return this
    }

    clickEnable() {
        const $monitor = this.$el.querySelector(".TV-monitor");

        if(this.isEnabled) {
            $monitor.classList.remove('active');
            $monitor.innerText = '';
        } else {
            $monitor.classList.add('active');
        }

        this.isEnabled = ! this.isEnabled;
        return this
    }
}