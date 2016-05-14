export default class {
  listeners = new Map();

  isFunction (type) {
    return !!(Object.prototype.toString.call(type) === '[object Function]');
  }

  addListener (label, callback) {
    if (!this.listeners.has(label)) {
      this.listeners.set(label, []);
    }

    this.listeners.get(label).push(callback);

    return true;
  }

  on (label, callback) {
    return this.addListener(label, callback);
  }

  emit (label, ...args) {
    const listeners = this.listeners.get(label);

    if (listeners && listeners.length) {
      listeners.forEach((listener) => {
        listener(...args);
      });

      return true;
    }

    return false;
  }

  removeListener (label, callback) {
    let listeners = this.listeners.get(label),
      index;

    if (listeners && listeners.length) {
      index = listeners.reduce((i, listener, index) => {
        return (this.isFunction(listener) && listener === callback) ? i = index : i;
      }, -1);

      if (index > -1) {
        listeners.splice(index, 1);
        this.listeners.set(label, listeners);
        return true;
      }
    }

    return false;
  }

  off (label, callback) {
    return this.removeListener(label, callback);
  }
}
