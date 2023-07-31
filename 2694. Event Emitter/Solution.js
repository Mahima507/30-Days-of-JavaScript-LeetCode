class EventEmitter {
  constructor() {
    this._subscriptions = {};
  }

  subscribe(event, cb) {
    if (!this._subscriptions[event]) {
      this._subscriptions[event] = [];
    }

    this._subscriptions[event].push(cb);

    return {
      unsubscribe: () => {
        this._unsubscribe(event, cb);
      },
    };
  }

  _unsubscribe(event, cb) {
    const subscriptions = this._subscriptions[event];

    if (subscriptions) {
      const index = subscriptions.indexOf(cb);

      if (index >= 0) {
        subscriptions.splice(index, 1);
      }
    }
  }

  emit(event, args = []) {
    const subscriptions = this._subscriptions[event];

    if (subscriptions) {
      const results = [];

      for (const cb of subscriptions) {
        results.push(cb(...args));
      }

      return results;
    } else {
      return [];
    }
  }
}


/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
