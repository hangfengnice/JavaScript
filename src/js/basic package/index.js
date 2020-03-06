class EventEmitter {
  constructor() {
    this._events = this._events || new Map()
    this._maxListeners = this._maxListeners || 10
  }
}
EventEmitter.prototype.emit = function (type, ...args) {
  let handler
  handler = this._events.get(type)
  if (args.length > 0) {
    handler.apply(this, args)
  } else {
    handler.call(this)
  }
  return true
}
EventEmitter.prototype.addListener = function (type, fn) {
  if (!this._events.get(type)) {
    this._events.set(type, fn)
  }
}

const emitter = new EventEmitter()

emitter.addListener('arson', man => {
  console.log(`expel ${man}`);
})
emitter.emit('arson', 'low-end')
