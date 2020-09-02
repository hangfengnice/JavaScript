function sign(v) {
  return v !== 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1
}
function formatTrend(trendRate) {
  var direction = (trendRate < 0 || Object.is(trendRate, -0)) ? "👇" : '👆'
  return `${direction} ${Math.abs(trendRate)}`
}

class Workshop {
  constructor(teacher) {
    this.teacher = teacher
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}

class AnotherWorkshop extends Workshop {
  speakup(msg) {
    this.ask(msg)
  }
}

var method = (function defineMethod() {
  var instance = new WeakMap()

  return function method(obj, methodName, fn) {
    Object.defineProperty(obj, methodName, {
      get() {
        console.log(this, 'inner');
        if (!instance.has(this)) {
          instance.set(this, {})
        }
        var methods = instance.get(this)
        if (!(methodName in methods)) {
          methods[methodName] = fn.bind(this)
        }
        return methods[methodName]
      }
    })
  }
})()

function bindMethods(obj) {
  debugger
  for(let ownProp of Object.getOwnPropertyNames(obj)) {
    if (typeof obj[ownProp] == 'function') {
      method(obj, ownProp, obj[ownProp])
    }
  }
}

var JSRecentPart = new AnotherWorkshop('Kyle')

bindMethods(Workshop.prototype)
bindMethods(AnotherWorkshop.prototype)

JSRecentPart.speakup('what is different part')

setTimeout(JSRecentPart.speakup, 100, 'gret');
