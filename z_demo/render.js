const bucket = new WeakMap()

const ITERATE_KEY = Symbol()

const reactiveMap = new Map()

function reactive(obj) {
  const existionProxy = reactiveMap.get(obj)
  if (existionProxy) {
    return existionProxy
  }
  const proxy = createReactive(obj)
  reactiveMap.set(obj, proxy)
  return proxy
}
function shallowReactive(obj) {
  return createReactive(obj, true)
}
function readonly(obj) {
  return createReactive(obj, false, true)
}
function shallowReadonly(obj) {
  return createReactive(obj, true, true)
}

const originMethod = Array.prototype.includes

const arrayInstrumentations = {}

let shouldTrack = true

;['push', 'pop', 'shift', 'unshift', 'splice'].forEach((method) => {
  const originMethod = Array.prototype[method]
  arrayInstrumentations[method] = function (...args) {
    shouldTrack = false
    const res = originMethod.apply(this, args)
    shouldTrack = true
    return res
  }
})
;['indexOf', 'lastIndexOf', 'includes'].forEach((method) => {
  const originMethod = Array.prototype[method]
  arrayInstrumentations[method] = function (...args) {
    let res = originMethod.apply(this, args)
    if (res === -1 || res === false) {
      res = originMethod.apply(this.raw, args)
    }
    return res
  }
})

const mutableInstrumentations = {
  add(key) {
    const target = this.raw
    const hadKey = target.has(key)
    const res = target.add(key)
    if (!hadKey) {
      trigger(target, key, 'ADD')
    }
    return res
  },
  delete(key) {
    const target = this.raw
    const hadKey = target.has(key)
    const res = target.delete(key)
    if (hadKey) {
      trigger(target, key, 'DELETE')
    }
    return res
  },
  clear() {
    const target = this.raw
    const hadItems = target.size !== 0
    const res = target.clear()
    if (hadItems) {
      trigger(target, undefined, 'CLEAR')
    }
    return res
  },

  get(key) {
    const target = this.raw
    const had = target.has(key)

    track(target, key)

    if (had) {
      const res = target.get(key)
      return typeof res === 'object' && res !== null ? reactive(res) : res
    }
  },
  set(key, value) {
    const target = this.raw
    const hadKey = target.has(key)
    const oldValue = target.get(key)
    const rawValue = value.raw || value
    const res = target.set(key, rawValue)

    if (!hadKey) {
      trigger(target, key, 'ADD')
    } else if (oldValue !== value && oldValue !== NaN && value !== NaN) {
      trigger(target, key, 'SET')
    }
    return res
  },
  forEach(callback, thisArg) {
    const wrap = (val) => (typeof val == 'object' ? reactive(val) : val)
    const target = this.raw
    track(target, ITERATE_KEY)

    target.forEach((v, k) => {
      callback.call(thisArg, wrap(v), wrap(k), this)
    })
  },
  [Symbol.iterator]: iterationMethod,
  entries: iterationMethod,
  values: valuesIterationMethod,
  keys: keysIterationMethod,
}
const MAP_KEY_ITERATE_KEY = Symbol()
function keysIterationMethod() {
  const target = this.raw
  const itr = target.keys()

  const wrap = (val) =>
    typeof val == 'object' && val !== null ? reactive(val) : val

  track(target, MAP_KEY_ITERATE_KEY)

  return {
    next() {
      const { value, done } = itr.next()

      return {
        value: wrap(value),
        done,
      }
    },
    [Symbol.iterator]() {
      return this
    },
  }
}
function valuesIterationMethod() {
  const target = this.raw
  const itr = target.values()

  const wrap = (val) =>
    typeof val == 'object' && val !== null ? reactive(val) : val

  track(target, ITERATE_KEY)

  return {
    next() {
      const { value, done } = itr.next()

      return {
        value: wrap(value),
        done,
      }
    },
    [Symbol.iterator]() {
      return this
    },
  }
}

function iterationMethod() {
  const target = this.raw
  const itr = target[Symbol.iterator]()

  const wrap = (val) =>
    typeof val == 'object' && val !== null ? reactive(val) : val

  track(target, ITERATE_KEY)

  return {
    next() {
      const { value, done } = itr.next()

      return {
        value: value ? [wrap(value[0]), wrap(value[1])] : value,
        done,
      }
    },
    [Symbol.iterator]() {
      return this
    },
  }
}

function ref(val) {
  const wrapper = {
    value: val,
  }
  Object.defineProperty(wrapper, '__v_isRef', {
    value: true,
  })
  return reactive(wrapper)
}

function toRef(obj, key) {
  const wrapper = {
    get value() {
      return obj[key]
    },
    set value(newVal) {
      obj[key] = newVal
    },
  }
  Object.defineProperty(wrapper, '__v_isRef', {
    value: true,
  })
  return wrapper
}

function toRefs(obj) {
  const ret = {}
  for (const key in obj) {
    ret[key] = toRef(obj, key)
  }
  return ret
}

function proxyRefs(obj) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver)
      return res.__v_isRef ? res.value : res
    },
    set(target, key, newVal, receiver) {
      const res = Reflect.get(target, key, receiver)
      if (res.__v_isRef) {
        res.value = newVal
        return true
      } else {
        return Reflect.set(target, key, newVal, receiver)
      }
    },
  })
}
function createReactive(obj, isShallow = false, isReadonly = false) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      console.log('get:', key)

      if (key === 'raw') {
        return target
      }

      if (key === 'size') {
        track(target, ITERATE_KEY)
        return Reflect.get(target, 'size', target)
      }

      // return mutableInstrumentations[key]

      if (
        Array.isArray(target) &&
        Object.prototype.hasOwnProperty.call(arrayInstrumentations, key)
      ) {
        return Reflect.get(arrayInstrumentations, key, receiver)
      }

      if (!isReadonly && typeof key != 'symbol') {
        track(target, key)
      }
      const res = Reflect.get(target, key, receiver)

      if (isShallow) {
        return res
      }
      if (typeof res === 'object' && res !== null) {
        return isReadonly ? readonly(res) : reactive(res)
      }
      return res
    },
    set(target, key, newVal, receiver) {
      if (isReadonly) {
        console.warn(`属性 ${key} 是只读的`)
        return true
      }
      let oldVal = target[key]

      const type = Array.isArray(target)
        ? Number(key) < target.length
          ? 'SET'
          : 'ADD'
        : Object.prototype.hasOwnProperty.call(target, key)
          ? 'SET'
          : 'ADD'

      const res = Reflect.set(target, key, newVal, receiver)

      if (target === receiver.raw) {
        if (oldVal !== newVal && oldVal !== NaN && newVal !== NaN) {
          trigger(target, key, type, newVal)
        }
      }

      return res
    },
    has(target, key) {
      track(target, key)
      return Reflect.has(target, key)
    },
    ownKeys(target) {
      track(target, Array.isArray(target) ? 'length' : ITERATE_KEY)
      return Reflect.ownKeys(target)
    },
    deleteProperty(target, key) {
      if (isReadonly) {
        console.warn(`属性 ${key} 是只读的`)
        return true
      }
      const hadKey = Object.prototype.hasOwnProperty.call(target, key)
      const res = Reflect.deleteProperty(target, key)
      if (hadKey && res) {
        trigger(target, key, 'DELETE')
      }
      return res
    },
  })
}

function track(target, key) {
  if (!activeEffect || !shouldTrack) return

  let depsMap = bucket.get(target)
  if (!depsMap) {
    bucket.set(target, (depsMap = new Map()))
  }
  let deps = depsMap.get(key)
  if (!deps) {
    depsMap.set(key, (deps = new Set()))
  }
  deps.add(activeEffect)

  activeEffect.deps.push(deps)
}

function trigger(target, key, type, newVal) {
  const depsMap = bucket.get(target)
  if (!depsMap) return true

  const effectsToRun = new Set()

  if (
    (type === 'ADD' || type === 'DELETE') &&
    Object.prototype.toString.call(target) == '[object Map]'
  ) {
    const iterateEffects = depsMap.get(MAP_KEY_ITERATE_KEY)
    iterateEffects &&
      iterateEffects.forEach((effectFn) => {
        if (effectFn != activeEffect) {
          effectsToRun.add(effectFn)
        }
      })
  }

  if (
    type === 'ADD' ||
    type === 'DELETE' ||
    (type === 'SET' && Object.prototype.toString.call(target) == '[object Map]')
  ) {
    const iterateEffects = depsMap.get(ITERATE_KEY)
    iterateEffects &&
      iterateEffects.forEach((effectFn) => {
        if (effectFn != activeEffect) {
          effectsToRun.add(effectFn)
        }
      })
  }

  const effects = depsMap.get(key)
  effects &&
    effects.forEach((effectFn) => {
      if (effectFn != activeEffect) {
        effectsToRun.add(effectFn)
      }
    })

  if (Array.isArray(target) && key === 'length') {
    depsMap.forEach((deps, key) => {
      if (key >= newVal) {
        deps.forEach((effectFn) => {
          if (effectFn != activeEffect) {
            effectsToRun.add(effectFn)
          }
        })
      }
    })
  }

  if (type == 'ADD' && Array.isArray(target)) {
    const lengthEffects = depsMap.get('length')
    lengthEffects &&
      lengthEffects.forEach((effectFn) => {
        if (effectFn != activeEffect) {
          effectsToRun.add(effectFn)
        }
      })
  }

  effectsToRun.forEach((effectFn) => {
    if (effectFn.options.scheduler) {
      effectFn.options.scheduler(effectFn)
    } else {
      effectFn()
    }
  })
}

let activeEffect = null
const effectStack = []

function effect(fn, options = {}) {
  const effectFn = () => {
    cleanup(effectFn)
    activeEffect = effectFn
    effectStack.push(activeEffect)
    const res = fn()
    effectStack.pop()
    activeEffect = effectStack[effectStack.length - 1]
    return res
  }
  effectFn.options = options
  effectFn.deps = []
  if (!options.lazy) {
    effectFn()
  }
  return effectFn
}

const jobQueue = new Set()

const p = Promise.resolve()

let isFlushing = false

function flushJob() {
  if (isFlushing) return
  isFlushing = true
  p.then(() => {
    jobQueue.forEach((job) => job())
  }).finally(() => {
    isFlushing = false
  })
}

function computed(getter) {
  let value

  let dirty = true

  const effectFn = effect(getter, {
    lazy: true,
    scheduler() {
      if (!dirty) {
        dirty = true
        trigger(obj, 'value')
      }
    },
  })

  const obj = {
    get value() {
      if (dirty) {
        value = effectFn()
        dirty = false
      }
      track(obj, 'value')
      return value
    },
  }
  return obj
}

function watch(source, cb, options = {}) {
  let getter
  if (typeof source === 'function') {
    getter = source
  } else {
    getter = () => traverse(source)
  }
  let oldValue, newValue

  let cleanup

  function onInvalidate(fn) {
    cleanup = fn
  }
  const job = () => {
    newValue = effectFn()
    if (cleanup) {
      cleanup()
    }
    cb(newValue, oldValue, onInvalidate)
    oldValue = newValue
  }
  let effectFn = effect(() => getter(), {
    lazy: true,
    scheduler: () => {
      if (options.flush === 'post') {
        const p = Promise.resolve()
        p.then(job)
      } else {
        job()
      }
    },
  })

  if (options.immediate) {
    job()
  } else {
    oldValue = effectFn()
  }
}

function traverse(value, seen = new Set()) {
  if (typeof value !== 'object' || value === null || seen.has(value)) return
  seen.add(value)
  for (const k in value) {
    traverse(value[k], seen)
  }
  return value
}
function cleanup(effectFn) {
  for (let i = 0; i < effectFn.deps.length; i++) {
    const deps = effectFn.deps[i]
    deps.delete(effectFn)
  }
  effectFn.deps.length = 0
}

// renderer code

const MyComponent = function () {
  return {
    tag: 'div',
    props: {
      onClick: () => alert('click div from component'),
    },
    children: [
      {
        tag: 'span',
        children: 'hello from component',
      },
    ],
  }
}
const vnodeComponent = {
  tag: MyComponent,
}

const MyComponent2 = {
  render() {
    return {
      tag: 'div',
      props: {
        onClick: () => alert('click div from component 2'),
      },
      children: [
        {
          tag: 'span',
          children: 'hello from component 2',
        },
      ],
    }
  },
}
const vnodeComponent2 = {
  tag: MyComponent2,
}

const vnode = {
  tag: 'div',
  props: {
    onClick: () => alert('click div'),
  },
  children: [
    {
      tag: 'span',
      children: 'hello',
    },
  ],
}

// function renderer(vnode, container) {
//   if (typeof vnode.tag === 'string') {
//     mountElement(vnode, container)
//   } else if (typeof vnode.tag === 'object') {
//     mountComponent(vnode, container)
//   }
// }

function mountComponent(vnode, container) {
  const component = vnode.tag
  const subTree = component.render()
  renderer(subTree, container)
}

function mountElement(vnode, container) {
  const el = document.createElement(vnode.tag)

  for (key in vnode.props) {
    if (key.startsWith('on')) {
      el.addEventListener(key.slice(2).toLowerCase(), vnode.props[key])
    } else {
      el.setAttribute(key, vnode.props[key])
    }
  }

  if (typeof vnode.children === 'string') {
    const textNode = document.createTextNode(vnode.children)
    el.appendChild(textNode)
  } else if (Array.isArray(vnode.children)) {
    vnode.children.forEach((child) => {
      renderer(child, el)
    })
  }
  container.appendChild(el)
}
// renderer(vnode, document.body)
// renderer(vnodeComponent, document.body)
// renderer(vnodeComponent2, document.body)
