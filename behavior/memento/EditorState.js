class EditorState {
    constructor(state) {
        this.state = state;
        this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }

    getState() {
        return this.state
    }

    getDate() {
        return this.date
    }

    getName() {
        return `${this.date} / (${this.state}...)`
    }
}

module.exports = EditorState;