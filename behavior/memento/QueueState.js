class QueueState {
    editorStates = [];

    constructor(editor, ...states) {
        this.editor = editor;
        this.editorStates = states;
    }

    backup() {
        this.editorStates.push(this.editor.save());
    }

    undo() {
        if (!this.editorStates.length) {
            return;
        }
        const state = this.editorStates.pop();
        this.editor.restore(state);
    }

    showHistory() {
        this.editorStates.forEach(state => console.log(state.getName()))
    }
}

module.exports = QueueState;