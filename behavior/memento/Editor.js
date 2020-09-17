const crypto = require('crypto');
const EditorState = require('./EditorState');

class Editor {

   constructor(state) {
       this.state = state;
   }

   save() {
       return new EditorState(this.state)
   }

   restore(state) {
        this.state = state.getState();
   }

   // other operation with state

    toLowerCase() {
       this.state = this.state.toUpperCase();
    }

    toHash() {
        const secret = 'state';
        this.state = crypto.createHmac('sha256', secret)
            .update(this.state)
            .digest('hex')
    }
}


module.exports = Editor;