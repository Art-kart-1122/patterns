class Observer {
    _isObserverObject = true;

    update() {throw new Error('This method must be implemented in the inherited class')}
}

module.exports = Observer;