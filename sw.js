// function renderer(vnode, container) {
//   if (typeof vnode.tag === 'string') {
//     // 说明 vnode 描述的是标签元素
//     mountElement(vnode, container)
//   } else if (typeof vnode.tag === 'object') {
//     // 说明 vnode 描述的是组件
//     mountComponent(vnode, container)
//   }
// }
// function mountComponent(vnode, container) {
//   const subtree = vnode.tag.render()
//   renderer(subtree, container)
// }
// function mountElement(vnode, container) {
//   // 使用 vnode.tag 作为标签名称创建 DOM 元素
//   const el = document.createElement(vnode.tag)
//   // 遍历 vnode.props，将属性、事件添加到 DOM 元素
//   for (const key in vnode.props) {
//     if (/^on/.test(key)) {
//       // 如果 key 以 on 开头，说明它是事件
//       el.addEventListener(
//         key.substr(2).toLowerCase(), // 事件名称 onClick ---> click
//         vnode.props[key] // 事件处理函数
//       )
//     }
//   }

//   // 处理 children
//   if (typeof vnode.children === 'string') {
//     // 如果 children 是字符串，说明它是元素的文本子节点
//     el.appendChild(document.createTextNode(vnode.children))
//   } else if (Array.isArray(vnode.children)) {
//     // 递归地调用 renderer 函数渲染子节点，使用当前元素 el 作为挂载点
//     vnode.children.forEach((child) => renderer(child, el))
//   }

//   // 将元素添加到挂载点下
//   container.appendChild(el)
// }

// // 存储副作用函数的桶
// const bucket = new WeakMap()

// const ITERATE_KEY = Symbol()
// const MAP_KEY_ITERATE_KEY = Symbol()

// const mutableInstrumentations = {
//   add(key) {
//     const target = this.raw
//     const res = target.add(key)
//     const hadKey = target.has(key)
//     if (!hadKey) {
//       trigger(target, key, 'ADD')
//     }
//     return res
//   },
//   delete(key) {
//     const target = this.raw
//     const res = target.add(key)
//     const hadKey = target.delete(key)
//     if (hadKey) {
//       trigger(target, key, 'DELETE')
//     }
//     return res
//   },
//   get(key) {
//     const target = this.raw
//     const had = target.has(key)
//     track(target, key)
//     if (had) {
//       const res = target.get(key)
//       return typeof res === 'object' ? reactive(res) : res
//     }
//   },
//   set(key, value) {
//     const target = this.raw
//     const had = target.has(key)
//     const oldValue = target.get(key)
//     const rawValue = value.raw || value

//     target.set(key, rawValue)

//     if (!had) {
//       trigger(target, key, 'ADD')
//     } else if (
//       oldValue !== value ||
//       (oldValue === oldValue && value === value)
//     ) {
//       trigger(target, key, 'SET')
//     }
//   },
//   forEach(callback, thisArg) {
//     const wrap = (val) => (typeof val === 'object' ? reactive(val) : val)
//     const target = this.raw
//     track(target, ITERATE_KEY)
//     target.forEach((v, k) => {
//       callback.call(thisArg, wrap(v), wrap(k), this)
//     })
//   },
//   [Symbol.iterator]: iterationMethod,
//   entries: iterationMethod,
//   values: valuesIterationMethod,
//   keys: keysIterationMethod,
// }
// function iterationMethod() {
//   const target = this.raw
//   const itr = target[Symbol.iterator]()
//   const wrap = (val) => (typeof val === 'object' && val ? reactive(val) : val)

//   track(target, ITERATE_KEY)
//   return {
//     next() {
//       const { value, done } = itr.next()
//       return {
//         value: value ? [wrap(value[0]), wrap(value[1])] : value,
//         done,
//       }
//     },
//     [Symbol.iterator]() {
//       return this
//     },
//   }
// }
// function valuesIterationMethod() {
//   const target = this.raw
//   const itr = target.values()
//   const wrap = (val) => (typeof val === 'object' && val ? reactive(val) : val)

//   track(target, ITERATE_KEY)
//   return {
//     next() {
//       const { value, done } = itr.next()
//       return {
//         value: wrap(value),
//         done,
//       }
//     },
//     [Symbol.iterator]() {
//       return this
//     },
//   }
// }
// function keysIterationMethod() {
//   const target = this.raw
//   const itr = target.keys()
//   const wrap = (val) => (typeof val === 'object' && val ? reactive(val) : val)

//   track(target, MAP_KEY_ITERATE_KEY)
//   return {
//     next() {
//       const { value, done } = itr.next()
//       return {
//         value: wrap(value),
//         done,
//       }
//     },
//     [Symbol.iterator]() {
//       return this
//     },
//   }
// }
// // 对原始数据的代理
// function createReactive(data, isShallow = false, isReadonly = false) {
//   return new Proxy(data, {
//     // 拦截读取操作
//     get(target, key, receiver) {
//       // console.log(target, key, receiver, 'target key receiver')
//       if (key === 'raw') {
//         return target
//       }
//       if (key === 'size') {
//         track(target, ITERATE_KEY)
//         return Reflect.get(target, key, target)
//       }
//       if (
//         Object.keys(mutableInstrumentations).includes(key) ||
//         typeof key === 'symbol'
//       ) {
//         return Reflect.get(
//           mutableInstrumentations,
//           key,
//           mutableInstrumentations
//         )
//       }

//       if (Array.isArray(target) && arrayInstrumentatins.hasOwnProperty(key)) {
//         return Reflect.get(arrayInstrumentatins, key, receiver)
//       }
//       if (!isReadonly && typeof key !== 'symbol') {
//         track(target, key)
//       }
//       const res = Reflect.get(target, key, receiver)
//       if (isShallow) {
//         return res
//       }
//       if (typeof res === 'object' && res !== null) {
//         return isReadonly ? readonly(res) : reactive(res)
//       }
//       return res
//     },
//     // 拦截设置操作
//     set(target, key, newVal, receiver) {
//       if (isReadonly) {
//         console.warn(`属性${key} 是只读的`)
//         return true
//       }
//       const oldValue = target[key]
//       const type = Array.isArray(target)
//         ? Number(key) < target.length
//           ? 'SET'
//           : 'ADD'
//         : Object.prototype.hasOwnProperty.call(target, key)
//         ? 'SET'
//         : 'ADD'
//       // 设置属性值
//       const res = Reflect.set(target, key, newVal, receiver)
//       if (target === receiver.raw) {
//         if (
//           oldValue !== newVal &&
//           (oldValue === oldValue || newVal === newVal)
//         ) {
//           trigger(target, key, type, newVal)
//         }
//       }
//       return res
//     },
//     has(target, key) {
//       track(target, key)
//       return Reflect.has(target, key)
//     },
//     ownKeys(target) {
//       track(target, Array.isArray(target) ? 'length' : ITERATE_KEY)
//       return Reflect.ownKeys(target)
//     },
//     deleteProperty(target, key) {
//       if (isReadonly) {
//         console.warn(`属性${key} 是只读的`)
//         return true
//       }
//       const hadKey = Object.prototype.hasOwnProperty.call(target, key)
//       const res = Reflect.deleteProperty(target, key)

//       if (res && hadKey) {
//         trigger(target, key, 'DELETE')
//       }
//       return res
//     },
//   })
// }
// const originMethod = Array.prototype.includes

// const arrayInstrumentatins = {}
// ;['includes', 'indexOf', 'lastIndexOf'].forEach((method) => {
//   const originMethod = Array.prototype[method]
//   arrayInstrumentatins[method] = function (...args) {
//     let res = originMethod.apply(this, args)

//     if (res === false || res === -1) {
//       res = originMethod.apply(this.raw, args)
//     }
//     return res
//   }
// })

// let shouldTrack = true

// ;['push', 'pop', 'shift', 'unshift', 'splice'].forEach((method) => {
//   const originMethod = Array.prototype[method]

//   arrayInstrumentatins[method] = function (...args) {
//     shouldTrack = false
//     let res = originMethod.apply(this, args)
//     shouldTrack = true
//     return res
//   }
// })
// const reactiveMap = new Map()
// function reactive(data) {
//   const existionProxy = reactiveMap.get(data)
//   if (existionProxy) return existionProxy
//   const proxy = createReactive(data)
//   reactiveMap.set(data, proxy)
//   return proxy
// }
// function shallowReactive(data) {
//   return createReactive(data, true)
// }
// function readonly(data) {
//   return createReactive(data, false, true)
// }
// function shallowReadonly(data) {
//   return createReactive(data, true, true)
// }
// function track(target, key) {
//   if (!activeEffect || !shouldTrack) return target[key]
//   let depsMap = bucket.get(target)

//   if (!depsMap) {
//     bucket.set(target, (depsMap = new Map()))
//   }

//   let deps = depsMap.get(key)
//   if (!deps) {
//     depsMap.set(key, (deps = new Set()))
//   }

//   deps.add(activeEffect)
//   activeEffect.deps.push(deps)
// }
// function trigger(target, key, type, newVal) {
//   const depsMap = bucket.get(target)
//   if (!depsMap) return

//   const effects = depsMap.get(key)
//   const iterateEffects = depsMap.get(ITERATE_KEY)
//   const effectToRun = new Set()

//   if (Array.isArray(target) && key === 'length') {
//     depsMap.forEach((effects, key) => {
//       if (key >= newVal) {
//         effects &&
//           effects.forEach((effectFn) => {
//             if (effectFn !== activeEffect) {
//               effectToRun.add(effectFn)
//             }
//           })
//       }
//     })
//   }

//   if (type === 'ADD' && Array.isArray(target)) {
//     const lengthEffects = depsMap.get('length')

//     lengthEffects &&
//       lengthEffects.forEach((effectFn) => {
//         if (effectFn !== activeEffect) {
//           effectToRun.add(effectFn)
//         }
//       })
//   }
//   effects &&
//     effects.forEach((effectFn) => {
//       if (effectFn !== activeEffect) {
//         effectToRun.add(effectFn)
//       }
//     })

//   if (
//     (type === 'ADD' || type === 'DELETE') &&
//     Object.prototype.toString.call(target) === '[object Map]'
//   ) {
//     const iterateEffects = depsMap.get(MAP_KEY_ITERATE_KEY)
//     iterateEffects &&
//       iterateEffects.forEach((effectFn) => {
//         if (effectFn !== activeEffect) {
//           effectToRun.add(effectFn)
//         }
//       })
//   }

//   if (
//     type === 'ADD' ||
//     type === 'DELETE' ||
//     (type === 'SET' &&
//       Object.prototype.toString.call(target) === '[object Map]')
//   ) {
//     iterateEffects &&
//       iterateEffects.forEach((effectFn) => {
//         if (effectFn !== activeEffect) {
//           effectToRun.add(effectFn)
//         }
//       })
//   }

//   effectToRun &&
//     effectToRun.forEach((effectFn) => {
//       if (effectFn.options.scheduler) {
//         effectFn.options.scheduler(effectFn)
//       } else {
//         effectFn()
//       }
//     })
// }

// let activeEffect
// const effectStack = []

// function effect(fn, options = {}) {
//   const effectFn = () => {
//     cleanup(effectFn)
//     activeEffect = effectFn
//     effectStack.push(effectFn)
//     const res = fn()
//     effectStack.pop()
//     activeEffect = effectStack[effectStack.length - 1]
//     return res
//   }
//   effectFn.options = options
//   effectFn.deps = []

//   if (!options.lazy) {
//     effectFn()
//   }
//   return effectFn
// }
// function cleanup(effectFn) {
//   for (let i = 0; i < effectFn.deps.length; i++) {
//     const deps = effectFn.deps[i]
//     deps.delete(effectFn)
//   }
//   effectFn.deps.length = []
// }

const queue = new Set()
const p = Promise.resolve()

let isFlushing = false
function queueJob(job) {
  queue.add(job)
  if (isFlushing) return
  isFlushing = true
  p.then(() => {
    queue.forEach((fn) => fn())
  }).finally(() => {
    isFlushing = false
    queue.clear()
  })
}

// function computed(getter) {
//   let value
//   let dirty = true
//   const effectFn = effect(getter, {
//     lazy: true,
//     scheduler() {
//       if (!dirty) {
//         dirty = true
//         trigger(obj, 'value')
//       }
//     },
//   })

//   const obj = {
//     get value() {
//       if (dirty) {
//         value = effectFn()
//         dirty = false
//       }
//       track(obj, 'value')
//       return value
//     },
//   }

//   return obj
// }

// function watch(source, cb) {
//   let getter
//   if (typeof source === 'function') {
//     getter = source
//   } else {
//     getter = () => traverse(source)
//   }
//   let oldValue, newValue
//   const job = () => {
//     newValue = effectFn()
//     cb(newValue, oldValue)
//     oldValue = newValue
//   }
//   const effectFn = effect(getter, {
//     lazy: true,
//     scheduler: () => {
//       if (options.flush === 'post') {
//         const p = Promise.resolve()
//         p.then(job)
//       } else {
//         job()
//       }
//     },
//   })
//   if (options.immediate) {
//     job()
//   } else {
//     oldValue = effectFn()
//   }
// }

// function traverse(value, seen = new Set()) {
//   if (typeof value !== 'object' || value === null || seen.has(value)) return
//   seen.add(value)

//   for (const k in value) {
//     traverse(value[k], seen)
//   }

//   return value
// }

// // 原始值

// function ref(val) {
//   const wrapper = {
//     value: val,
//   }

//   Object.defineProperty(wrapper, '__v_isRef', {
//     value: true,
//   })

//   return reactive(wrapper)
// }

// function toRef(obj, key) {
//   const wrapper = {
//     get value() {
//       return obj[key]
//     },
//     set value(val) {
//       // console.log('here')
//       obj[key] = val
//     },
//   }
//   Object.defineProperty(wrapper, '__v_isRef', {
//     value: true,
//   })

//   return wrapper
// }

// function toRefs(obj) {
//   const ret = {}

//   for (const key in obj) {
//     ret[key] = toRef(obj, key)
//   }
//   return ret
// }

// function proxyRefs(target) {
//   return new Proxy(target, {
//     get(target, key, receiver) {
//       const value = Reflect.get(target, key, receiver)

//       return value.__v_isRef ? value.value : value
//     },
//     set(target, key, newValue, receiver) {
//       const value = target[key]
//       if (value.__v_isRef) {
//         value.value = newValue
//         return true
//       }
//       return Reflect.set(target, key, newValue, receiver)
//     },
//   })
// }

const { effect, ref, reactive } = VueReactivity

// function renderer(domString, container) {
//   container.innerHTML = domString
// }

// let count = ref(1)
// effect(() => {
//   renderer(`<h1>${count.value}</h1>`, document.getElementById('app'))
// })

// count.value++

function createRenderer(options) {
  const {
    createElement,
    insert,
    setElementText,
    createText,
    setText,
    patchProps,
    unmount,
  } = options
  function render(vnode, container) {
    if (vnode) {
      patch(container._vnode, vnode, container)
    } else {
      if (container._vnode) {
        unmount(container._vnode)
      }
    }
    container._vnode = vnode
  }
  return {
    render,
  }

  function patch(n1, n2, container, anchor) {
    if (n1 && n1.type !== n2.type) {
      unmount(n1)
      n1 = null
    }
    const { type } = n2
    if (typeof type === 'string') {
      if (!n1) {
        mountElement(n2, container, anchor)
      } else {
        patchElement(n1, n2)
      }
    } else if (type === Text) {
      if (!n1) {
        const el = (n2.el = createText(n2.children))
        insert(el, container)
      } else {
        const el = (n2.el = n1.el)
        if (n2.children !== n1.children) {
          setText(el, n2.children)
        }
      }
    } else if (type === Fragment) {
      if (!n1) {
        n2.children.forEach((c) => patch(null, c, container))
      } else {
        patchChildren(n1, n2, container)
      }
    } else if (typeof type === 'object') {
      if (!n1) {
        mountComponent(n2, container, anchor)
      } else {
        patchComponent(n1, n2, anchor)
      }
    }
  }
  function mountElement(vnode, container, anchor) {
    const el = (vnode.el = createElement(vnode.type))

    if (typeof vnode.children === 'string') {
      setElementText(el, vnode.children)
    } else if (Array.isArray(vnode.children)) {
      vnode.children.forEach((child) => {
        patch(null, child, el)
      })
    }

    if (vnode.props) {
      for (const key in vnode.props) {
        const value = vnode.props[key]
        patchProps(el, key, null, value)
      }
    }

    insert(el, container, anchor)
  }
  function patchElement(n1, n2) {
    const el = (n2.el = n1.el)
    const oldProps = n1.props
    const newProps = n2.props

    for (const key in newProps) {
      if (newProps[key] !== oldProps[key]) {
        patchProps(el, key, oldProps[key], newProps[key])
      }
    }
    for (const key in oldProps) {
      if (!(key in newProps)) {
        patchProps(el, key, oldProps[key], null)
      }
    }
    patchChildren(n1, n2, el)
  }
  function patchChildren(n1, n2, container) {
    if (typeof n2.children === 'string') {
      if (Array.isArray(n1.children)) {
        n1.children.forEach((c) => unmount(c))
      }
      setElementText(container, n2.children)
    } else if (Array.isArray(n2.children)) {
      if (Array.isArray(n1.children)) {
        // patchKeyedChildren(n1, n2, container)
        const oldChildren = n1.children
        const newChildren = n2.children

        let lastIndex = 0
        for (let i = 0; i < newChildren.length; i++) {
          const newVnode = newChildren[i]
          let j = 0
          let find = false

          for (; j < oldChildren.length; j++) {
            const oldVnode = oldChildren[j]

            if (newVnode.key === oldVnode.key) {
              find = true
              patch(oldVnode, newVnode, container)

              if (j < lastIndex) {
                const prevVnode = newChildren[i - 1]
                if (prevVnode) {
                  const anchor = prevVnode.el.nextSiblind

                  insert(newVnode.el, container, anchor)
                }
              } else {
                lastIndex = j
              }
              break
            }
          }
          if (!find) {
            const prevVnode = newChildren[i - 1]
            let anchor
            if (prevVnode) {
              anchor = prevVnode.el.nextSiblind
            } else {
              anchor = container.firstChild
            }
            patch(null, newVnode, container, anchor)
          }
        }

        for (let i = 0; i < oldChildren.length; i++) {
          const oldVnode = oldChildren[i]

          const has = newChildren.find((vnode) => vnode.key === oldVnode.key)

          if (!has) {
            unmount(oldVnode)
          }
        }
      } else {
        setElementText(container, '')
        n2.children.forEach((c) => patch(null, c, container))
      }
    } else {
      if (Array.isArray(n1.children)) {
        n1.children.forEach((c) => unmount(c))
      } else if (typeof n1.children === 'string') {
        setElementText(container, '')
      }
    }
  }

  function mountComponent(vnode, container, anchor) {
    const componentOptions = vnode.type
    const { render, data } = componentOptions
    const state = reactive(data())

    const instance = {
      state,
      isMounted: false,
      subtree: null,
    }

    vnode.component = instance

    effect(
      () => {
        const subtree = render.call(state, state)

        if (!instance.isMounted) {
          patch(null, subtree, container, anchor)
          instance.isMounted = true
        } else {
          patch(instance.subtree, subtree, container, anchor)
        }
        instance.subtree = subtree
      },
      {
        scheduler: queueJob,
      }
    )
  }

  // function patchKeyedChildren(n1, n2, container) {
  //   const oldChildren = n1.children
  //   const newChildren = n2.children

  //   let oldStartIdx = 0
  //   let oldEndIdx = oldChildren.length - 1
  //   let newStartIdx = 0
  //   let newEndIdx = newChildren.length - 1

  //   let oldStartVNode = oldChildren[oldStartIdx]
  //   let oldEndVNode = oldChildren[oldEndIdx]

  //   let newStartVNode = newChildren[newStartIdx]
  //   let newEndVNode = newChildren[newEndIdx]

  //   // if (oldStartVNode.key === newStartVNode.key) {

  //   // } else if () {

  //   // } else if () {

  //   // } else if () {

  //   // }
  // }
}
function shouldSetAsProps(el, key, value) {
  if (key === 'form' && el.tagName === 'INPUT') {
    return false
  }
  return key in el
}
const renderer = createRenderer({
  createElement(tag) {
    return document.createElement(tag)
  },
  setElementText(el, text) {
    el.textContent = text
  },
  insert(el, parent, anchor = null) {
    parent.insertBefore(el, anchor)
  },
  createText(text) {
    return document.createTextNode(text)
  },
  setText(el, text) {
    el.nodeValue = text
  },
  patchProps(el, key, prevValue, nextValue) {
    if (/^on/.test(key)) {
      let invokers = el._vei || (el._vei = {})
      let invoker = invokers[key]
      const name = key.slice(2).toLowerCase()
      if (nextValue) {
        if (!invoker) {
          invoker = el._vei[key] = (e) => {
            if (e.timeStamp < invoker.attached) return
            if (Array.isArray(invoker.value)) {
              invoker.value.forEach((fn) => fn(e))
            } else {
              invoker.value(e)
            }
          }
          invoker.value = nextValue
          invoker.attached = performance.now()
          el.addEventListener(name, invoker)
        } else {
          invoker.value = nextValue
        }
      } else if (invoker) {
        el.removeEventListener(name, invoker)
      }
    } else if (key === 'class') {
      el.className = nextValue || ''
    } else if (shouldSetAsProps(el, key, nextValue)) {
      const type = typeof el[key]

      if (type === 'boolean' && value === '') {
        el[key] = true
      } else {
        el[key] = nextValue
      }
    } else {
      el.setAttribute(key, nextValue)
    }
  },
  unmount(vnode) {
    if (vnode.type === Fragment) {
      return vnode.children.forEach((c) => unmount(c))
    }
    const parent = vnode.el.parentNode
    if (parent) parent.removeChild(vnode.el)
  },
})
const Text = Symbol()
// const newVNode = {
//   type: Text,
//   children: 'wo 是文本内容',
// }
const Comment = Symbol()
// const newVnode1 = {
//   type: Comment,
//   children: '我是注释内容',
// }

const Fragment = Symbol()

const bol = ref(false)

const MyComponent = {
  name: 'MyComponent',
  data() {
    return {
      foo: 'hello world',
    }
  },
  render() {
    return {
      type: 'div',
      children: `foo ${this.foo}`,
    }
  },
}

const CompVNode = {
  type: MyComponent,
}
renderer.render(CompVNode, document.getElementById('app'))

// const oldVnode = {
//   type: 'div',
//   children: [
//     { type: 'p', children: '1', key: 1 },
//     { type: 'p', children: '2', key: 2 },
//     { type: 'p', children: 'hello', key: 3 },
//   ],
// }
// const newVnode = {
//   type: 'div',
//   children: [
//     // { type: 'p', children: 'world', key: 3 },
//     { type: 'p', children: '1', key: 1 },
//     // { type: 'p', children: '4', key: 4 },
//     { type: 'p', children: '2', key: 2 },
//   ],
// }

// renderer.render(oldVnode, document.getElementById('app'))

// setTimeout(() => {
//   renderer.render(newVnode, document.getElementById('app'))
// }, 1000)

const State = {
  initial: 1,
  tagOpen: 2,
  tagName: 3,
  text: 4,
  tagEnd: 5,
  tagEndName: 6,
}

function isAlpha(char) {
  return /[a-zA-Z]/.test(char)
}

function tokenize(str) {
  let currentState = State.initial

  const chars = []
  const tokens = []

  while (str) {
    const char = str[0]

    switch (currentState) {
      case State.initial:
        if (char === '<') {
          currentState = State.tagOpen
          str = str.slice(1)
        } else if (isAlpha(char)) {
          currentState = State.text
          chars.push(char)
          str = str.slice(1)
        }
        break
      case State.tagOpen:
        if (isAlpha(char)) {
          currentState = State.tagName
          chars.push(char)
          str = str.slice(1)
        } else if (char === '/') {
          currentState = State.tagEnd
          str = str.slice(1)
        }
        break
      case State.tagName:
        if (isAlpha(char)) {
          chars.push(char)
          str = str.slice(1)
        } else if (char === '>') {
          currentState = State.initial

          tokens.push({
            type: 'tag',
            name: chars.join(''),
          })

          chars.length = 0
          str = str.slice(1)
        }
        break
      case State.text:
        if (isAlpha(char)) {
          chars.push(char)
          str = str.slice(1)
        } else if (char === '<') {
          currentState = State.tagOpen

          tokens.push({
            type: 'text',
            content: chars.join(''),
          })
          chars.length = 0
          str = str.slice(1)
        }
        break
      case State.tagEnd:
        if (isAlpha(char)) {
          currentState = State.tagEndName
          chars.push(char)
          str = str.slice(1)
        }
        break
      case State.tagEndName:
        if (isAlpha(char)) {
          chars.push(char)
          str = str.slice(1)
        } else if (char === '>') {
          currentState = State.initial

          tokens.push({
            type: 'tagEnd',
            name: chars.join(''),
          })

          chars.length = 0
          str = str.slice(1)
        }
        break
    }
  }
  return tokens
}

function parse(str) {
  const tokens = tokenize(str)
  const root = {
    type: 'Root',
    children: [],
  }

  const elementStack = [root]

  while (tokens.length) {
    const parent = elementStack[elementStack.length - 1]

    const t = tokens[0]

    switch (t.type) {
      case 'tag':
        const elementNode = {
          type: 'Element',
          tag: t.name,
          children: [],
        }
        parent.children.push(elementNode)
        elementStack.push(elementNode)
        break
      case 'text':
        const textNode = {
          type: 'Text',
          content: t.content,
        }
        parent.children.push(textNode)
        break
      case 'tagEnd':
        elementStack.pop()
        break
    }
    tokens.shift()
  }
  return root
}
function dump(node, indent = 0) {
  const type = node.type

  const desc =
    node.type === 'Root'
      ? ''
      : node.type === 'Element'
      ? node.tag
      : node.content

  console.log(`${'-'.repeat(indent)}${type}: ${desc}`)

  if (node.children) {
    node.children.forEach((n) => dump(n, indent + 2))
  }
}

function traverseNode(ast, context) {
  context.currentNode = ast
  // const currentNode = ast
  const transforms = context.nodeTransforms
  for (let i = 0; i < transforms.length; i++) {
    transforms[i](context.currentNode, context)
    if (!context.currentNode) return
  }
  const children = context.currentNode.children

  if (children) {
    for (let i = 0; i < children.length; i++) {
      context.parent = context.currentNode
      context.childIndex = i
      traverseNode(children[i], context)
    }
  }
}

function transfrom(ast) {
  const context = {
    currentNode: null,
    childIndex: 0,
    parent: null,
    replaceNode(node) {
      context.parent.children[context.childIndex] = node
      context.currentNode = node
    },
    removeNode() {
      if (context.parent) {
        context.parent.children.splice(context.childIndex, 1)

        context.currentNode = null
      }
    },
    nodeTransforms: [transformElement, transformText],
  }
  traverseNode(ast, context)
  dump(ast)

  function transformElement(node) {
    if (node.type === 'Element' && node.tag === 'p') {
      node.tag = 'h1'
    }
  }
  function transformText(node, context) {
    if (node.type === 'Text') {
      context.replaceNode({
        type: 'Element',
        tag: 'span',
      })
      // context.removeNode()
      // node.content = node.content.repeat(2)
    }
  }
}

const root = parse(`<div><p>Vue</p><p>Template</p></div>`)
console.log(root, 'root')

transfrom(root)
