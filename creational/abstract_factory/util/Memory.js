class Memory {
    store = {};

    _verifyTask(task) {
        return task && typeof task === 'string'
    }

    remember(task, ...knowledge ) {
        if(!this._verifyTask(task)) throw new Error('Task is incorrect')

        if(this.store[task]) {
            this.store[task].push(...knowledge);
        } else {
            this.store[task] = [...knowledge];
        }

        return this
    }

    search(task) {
        if(!this._verifyTask(task)) throw new Error('Task is incorrect')

        return this.store[task] ? this.store[task] : []
    }
}

module.exports = Memory;