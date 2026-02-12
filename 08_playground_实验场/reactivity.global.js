'use strict'
var VueReactivity = (() => {
  var __defProp = Object.defineProperty
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor
  var __getOwnPropNames = Object.getOwnPropertyNames
  var __hasOwnProp = Object.prototype.hasOwnProperty
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true })
  }
  var __copyProps = (to, from, except, desc) => {
    if ((from && typeof from === 'object') || typeof from === 'function') {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
            get: () => from[key],
            enumerable:
              !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
          })
    }
    return to
  }
  var __toCommonJS = (mod) =>
    __copyProps(__defProp({}, '__esModule', { value: true }), mod)

  // packages/reactivity/src/index.ts
  var index_exports = {}
  __export(index_exports, {
    ARRAY_ITERATE_KEY: () => ARRAY_ITERATE_KEY,
    EffectFlags: () => EffectFlags,
    EffectScope: () => EffectScope,
    ITERATE_KEY: () => ITERATE_KEY,
    MAP_KEY_ITERATE_KEY: () => MAP_KEY_ITERATE_KEY,
    ReactiveEffect: () => ReactiveEffect,
    ReactiveFlags: () => ReactiveFlags,
    TrackOpTypes: () => TrackOpTypes,
    TriggerOpTypes: () => TriggerOpTypes,
    WatchErrorCodes: () => WatchErrorCodes,
    computed: () => computed,
    customRef: () => customRef,
    effect: () => effect,
    effectScope: () => effectScope,
    enableTracking: () => enableTracking,
    getCurrentScope: () => getCurrentScope,
    getCurrentWatcher: () => getCurrentWatcher,
    isProxy: () => isProxy,
    isReactive: () => isReactive,
    isReadonly: () => isReadonly,
    isRef: () => isRef,
    isShallow: () => isShallow,
    markRaw: () => markRaw,
    onEffectCleanup: () => onEffectCleanup,
    onScopeDispose: () => onScopeDispose,
    onWatcherCleanup: () => onWatcherCleanup,
    pauseTracking: () => pauseTracking,
    proxyRefs: () => proxyRefs,
    reactive: () => reactive,
    reactiveReadArray: () => reactiveReadArray,
    readonly: () => readonly,
    ref: () => ref,
    resetTracking: () => resetTracking,
    shallowReactive: () => shallowReactive,
    shallowReadArray: () => shallowReadArray,
    shallowReadonly: () => shallowReadonly,
    shallowRef: () => shallowRef,
    stop: () => stop,
    toRaw: () => toRaw,
    toReactive: () => toReactive,
    toReadonly: () => toReadonly,
    toRef: () => toRef,
    toRefs: () => toRefs,
    toValue: () => toValue,
    track: () => track,
    traverse: () => traverse,
    trigger: () => trigger,
    triggerRef: () => triggerRef,
    unref: () => unref,
    watch: () => watch,
  })

  // packages/shared/src/makeMap.ts
  // @__NO_SIDE_EFFECTS__
  function makeMap(str) {
    const map = /* @__PURE__ */ Object.create(null)
    for (const key of str.split(',')) map[key] = 1
    return (val) => val in map
  }

  // packages/shared/src/general.ts
  var EMPTY_OBJ = true ? Object.freeze({}) : {}
  var EMPTY_ARR = true ? Object.freeze([]) : []
  var NOOP = () => {}
  var extend = Object.assign
  var remove = (arr, el) => {
    const i = arr.indexOf(el)
    if (i > -1) {
      arr.splice(i, 1)
    }
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty
  var hasOwn = (val, key) => hasOwnProperty.call(val, key)
  var isArray = Array.isArray
  var isMap = (val) => toTypeString(val) === '[object Map]'
  var isSet = (val) => toTypeString(val) === '[object Set]'
  var isFunction = (val) => typeof val === 'function'
  var isString = (val) => typeof val === 'string'
  var isSymbol = (val) => typeof val === 'symbol'
  var isObject = (val) => val !== null && typeof val === 'object'
  var objectToString = Object.prototype.toString
  var toTypeString = (value) => objectToString.call(value)
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1)
  }
  var isPlainObject = (val) => toTypeString(val) === '[object Object]'
  var isIntegerKey = (key) =>
    isString(key) &&
    key !== 'NaN' &&
    key[0] !== '-' &&
    '' + parseInt(key, 10) === key
  var cacheStringFunction = (fn) => {
    const cache = /* @__PURE__ */ Object.create(null)
    return (str) => {
      const hit = cache[str]
      return hit || (cache[str] = fn(str))
    }
  }
  var camelizeRE = /-\w/g
  var camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (c) => c.slice(1).toUpperCase())
  })
  var hyphenateRE = /\B([A-Z])/g
  var hyphenate = cacheStringFunction((str) =>
    str.replace(hyphenateRE, '-$1').toLowerCase(),
  )
  var capitalize = cacheStringFunction((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  })
  var toHandlerKey = cacheStringFunction((str) => {
    const s = str ? `on${capitalize(str)}` : ``
    return s
  })
  var hasChanged = (value, oldValue) => !Object.is(value, oldValue)
  var def = (obj, key, value, writable = false) => {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: false,
      writable,
      value,
    })
  }

  // packages/reactivity/src/constants.ts
  var TrackOpTypes = /* @__PURE__ */ ((TrackOpTypes2) => {
    TrackOpTypes2['GET'] = 'get'
    TrackOpTypes2['HAS'] = 'has'
    TrackOpTypes2['ITERATE'] = 'iterate'
    return TrackOpTypes2
  })(TrackOpTypes || {})
  var TriggerOpTypes = /* @__PURE__ */ ((TriggerOpTypes2) => {
    TriggerOpTypes2['SET'] = 'set'
    TriggerOpTypes2['ADD'] = 'add'
    TriggerOpTypes2['DELETE'] = 'delete'
    TriggerOpTypes2['CLEAR'] = 'clear'
    return TriggerOpTypes2
  })(TriggerOpTypes || {})
  var ReactiveFlags = /* @__PURE__ */ ((ReactiveFlags2) => {
    ReactiveFlags2['SKIP'] = '__v_skip'
    ReactiveFlags2['IS_REACTIVE'] = '__v_isReactive'
    ReactiveFlags2['IS_READONLY'] = '__v_isReadonly'
    ReactiveFlags2['IS_SHALLOW'] = '__v_isShallow'
    ReactiveFlags2['RAW'] = '__v_raw'
    ReactiveFlags2['IS_REF'] = '__v_isRef'
    return ReactiveFlags2
  })(ReactiveFlags || {})

  // packages/reactivity/src/warning.ts
  function warn(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args)
  }

  // packages/reactivity/src/effectScope.ts
  var activeEffectScope
  var EffectScope = class {
    constructor(detached = false) {
      this.detached = detached
      /**
       * @internal
       */
      this._active = true
      /**
       * @internal track `on` calls, allow `on` call multiple times
       */
      this._on = 0
      /**
       * @internal
       */
      this.effects = []
      /**
       * @internal
       */
      this.cleanups = []
      this._isPaused = false
      this.parent = activeEffectScope
      if (!detached && activeEffectScope) {
        this.index =
          (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
            this,
          ) - 1
      }
    }
    get active() {
      return this._active
    }
    pause() {
      if (this._active) {
        this._isPaused = true
        let i, l
        if (this.scopes) {
          for (i = 0, l = this.scopes.length; i < l; i++) {
            this.scopes[i].pause()
          }
        }
        for (i = 0, l = this.effects.length; i < l; i++) {
          this.effects[i].pause()
        }
      }
    }
    /**
     * Resumes the effect scope, including all child scopes and effects.
     */
    resume() {
      if (this._active) {
        if (this._isPaused) {
          this._isPaused = false
          let i, l
          if (this.scopes) {
            for (i = 0, l = this.scopes.length; i < l; i++) {
              this.scopes[i].resume()
            }
          }
          for (i = 0, l = this.effects.length; i < l; i++) {
            this.effects[i].resume()
          }
        }
      }
    }
    run(fn) {
      if (this._active) {
        const currentEffectScope = activeEffectScope
        try {
          activeEffectScope = this
          return fn()
        } finally {
          activeEffectScope = currentEffectScope
        }
      } else if (true) {
        warn(`cannot run an inactive effect scope.`)
      }
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    on() {
      if (++this._on === 1) {
        this.prevScope = activeEffectScope
        activeEffectScope = this
      }
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    off() {
      if (this._on > 0 && --this._on === 0) {
        activeEffectScope = this.prevScope
        this.prevScope = void 0
      }
    }
    stop(fromParent) {
      if (this._active) {
        this._active = false
        let i, l
        for (i = 0, l = this.effects.length; i < l; i++) {
          this.effects[i].stop()
        }
        this.effects.length = 0
        for (i = 0, l = this.cleanups.length; i < l; i++) {
          this.cleanups[i]()
        }
        this.cleanups.length = 0
        if (this.scopes) {
          for (i = 0, l = this.scopes.length; i < l; i++) {
            this.scopes[i].stop(true)
          }
          this.scopes.length = 0
        }
        if (!this.detached && this.parent && !fromParent) {
          const last = this.parent.scopes.pop()
          if (last && last !== this) {
            this.parent.scopes[this.index] = last
            last.index = this.index
          }
        }
        this.parent = void 0
      }
    }
  }
  function effectScope(detached) {
    return new EffectScope(detached)
  }
  function getCurrentScope() {
    return activeEffectScope
  }
  function onScopeDispose(fn, failSilently = false) {
    if (activeEffectScope) {
      activeEffectScope.cleanups.push(fn)
    } else if (!failSilently) {
      warn(
        `onScopeDispose() is called when there is no active effect scope to be associated with.`,
      )
    }
  }

  // packages/reactivity/src/effect.ts
  var activeSub
  var EffectFlags = /* @__PURE__ */ ((EffectFlags2) => {
    EffectFlags2[(EffectFlags2['ACTIVE'] = 1)] = 'ACTIVE'
    EffectFlags2[(EffectFlags2['RUNNING'] = 2)] = 'RUNNING'
    EffectFlags2[(EffectFlags2['TRACKING'] = 4)] = 'TRACKING'
    EffectFlags2[(EffectFlags2['NOTIFIED'] = 8)] = 'NOTIFIED'
    EffectFlags2[(EffectFlags2['DIRTY'] = 16)] = 'DIRTY'
    EffectFlags2[(EffectFlags2['ALLOW_RECURSE'] = 32)] = 'ALLOW_RECURSE'
    EffectFlags2[(EffectFlags2['PAUSED'] = 64)] = 'PAUSED'
    EffectFlags2[(EffectFlags2['EVALUATED'] = 128)] = 'EVALUATED'
    return EffectFlags2
  })(EffectFlags || {})
  var pausedQueueEffects = /* @__PURE__ */ new WeakSet()
  var ReactiveEffect = class {
    constructor(fn) {
      this.fn = fn
      /**
       * @internal
       */
      this.deps = void 0
      /**
       * @internal
       */
      this.depsTail = void 0
      /**
       * @internal
       */
      this.flags = 1 /* ACTIVE */ | 4 /* TRACKING */
      /**
       * @internal
       */
      this.next = void 0
      /**
       * @internal
       */
      this.cleanup = void 0
      this.scheduler = void 0
      if (activeEffectScope && activeEffectScope.active) {
        activeEffectScope.effects.push(this)
      }
    }
    pause() {
      this.flags |= 64 /* PAUSED */
    }
    resume() {
      if (this.flags & 64 /* PAUSED */) {
        this.flags &= ~64 /* PAUSED */
        if (pausedQueueEffects.has(this)) {
          pausedQueueEffects.delete(this)
          this.trigger()
        }
      }
    }
    /**
     * @internal
     */
    notify() {
      if (
        this.flags & 2 /* RUNNING */ &&
        !((this.flags & 32) /* ALLOW_RECURSE */)
      ) {
        return
      }
      if (!((this.flags & 8) /* NOTIFIED */)) {
        batch(this)
      }
    }
    run() {
      if (!((this.flags & 1) /* ACTIVE */)) {
        return this.fn()
      }
      this.flags |= 2 /* RUNNING */
      cleanupEffect(this)
      prepareDeps(this)
      const prevEffect = activeSub
      const prevShouldTrack = shouldTrack
      activeSub = this
      shouldTrack = true
      try {
        return this.fn()
      } finally {
        if (activeSub !== this) {
          warn(
            'Active effect was not restored correctly - this is likely a Vue internal bug.',
          )
        }
        cleanupDeps(this)
        activeSub = prevEffect
        shouldTrack = prevShouldTrack
        this.flags &= ~2 /* RUNNING */
      }
    }
    stop() {
      if (this.flags & 1 /* ACTIVE */) {
        for (let link = this.deps; link; link = link.nextDep) {
          removeSub(link)
        }
        this.deps = this.depsTail = void 0
        cleanupEffect(this)
        this.onStop && this.onStop()
        this.flags &= ~1 /* ACTIVE */
      }
    }
    trigger() {
      if (this.flags & 64 /* PAUSED */) {
        pausedQueueEffects.add(this)
      } else if (this.scheduler) {
        this.scheduler()
      } else {
        this.runIfDirty()
      }
    }
    /**
     * @internal
     */
    runIfDirty() {
      if (isDirty(this)) {
        this.run()
      }
    }
    get dirty() {
      return isDirty(this)
    }
  }
  var batchDepth = 0
  var batchedSub
  var batchedComputed
  function batch(sub, isComputed = false) {
    sub.flags |= 8 /* NOTIFIED */
    if (isComputed) {
      sub.next = batchedComputed
      batchedComputed = sub
      return
    }
    sub.next = batchedSub
    batchedSub = sub
  }
  function startBatch() {
    batchDepth++
  }
  function endBatch() {
    if (--batchDepth > 0) {
      return
    }
    if (batchedComputed) {
      let e = batchedComputed
      batchedComputed = void 0
      while (e) {
        const next = e.next
        e.next = void 0
        e.flags &= ~8 /* NOTIFIED */
        e = next
      }
    }
    let error
    while (batchedSub) {
      let e = batchedSub
      batchedSub = void 0
      while (e) {
        const next = e.next
        e.next = void 0
        e.flags &= ~8 /* NOTIFIED */
        if (e.flags & 1 /* ACTIVE */) {
          try {
            e.trigger()
          } catch (err) {
            if (!error) error = err
          }
        }
        e = next
      }
    }
    if (error) throw error
  }
  function prepareDeps(sub) {
    for (let link = sub.deps; link; link = link.nextDep) {
      link.version = -1
      link.prevActiveLink = link.dep.activeLink
      link.dep.activeLink = link
    }
  }
  function cleanupDeps(sub) {
    let head
    let tail = sub.depsTail
    let link = tail
    while (link) {
      const prev = link.prevDep
      if (link.version === -1) {
        if (link === tail) tail = prev
        removeSub(link)
        removeDep(link)
      } else {
        head = link
      }
      link.dep.activeLink = link.prevActiveLink
      link.prevActiveLink = void 0
      link = prev
    }
    sub.deps = head
    sub.depsTail = tail
  }
  function isDirty(sub) {
    for (let link = sub.deps; link; link = link.nextDep) {
      if (
        link.dep.version !== link.version ||
        (link.dep.computed &&
          (refreshComputed(link.dep.computed) ||
            link.dep.version !== link.version))
      ) {
        return true
      }
    }
    if (sub._dirty) {
      return true
    }
    return false
  }
  function refreshComputed(computed2) {
    if (
      computed2.flags & 4 /* TRACKING */ &&
      !((computed2.flags & 16) /* DIRTY */)
    ) {
      return
    }
    computed2.flags &= ~16 /* DIRTY */
    if (computed2.globalVersion === globalVersion) {
      return
    }
    computed2.globalVersion = globalVersion
    if (
      !computed2.isSSR &&
      computed2.flags & 128 /* EVALUATED */ &&
      ((!computed2.deps && !computed2._dirty) || !isDirty(computed2))
    ) {
      return
    }
    computed2.flags |= 2 /* RUNNING */
    const dep = computed2.dep
    const prevSub = activeSub
    const prevShouldTrack = shouldTrack
    activeSub = computed2
    shouldTrack = true
    try {
      prepareDeps(computed2)
      const value = computed2.fn(computed2._value)
      if (dep.version === 0 || hasChanged(value, computed2._value)) {
        computed2.flags |= 128 /* EVALUATED */
        computed2._value = value
        dep.version++
      }
    } catch (err) {
      dep.version++
      throw err
    } finally {
      activeSub = prevSub
      shouldTrack = prevShouldTrack
      cleanupDeps(computed2)
      computed2.flags &= ~2 /* RUNNING */
    }
  }
  function removeSub(link, soft = false) {
    const { dep, prevSub, nextSub } = link
    if (prevSub) {
      prevSub.nextSub = nextSub
      link.prevSub = void 0
    }
    if (nextSub) {
      nextSub.prevSub = prevSub
      link.nextSub = void 0
    }
    if (dep.subsHead === link) {
      dep.subsHead = nextSub
    }
    if (dep.subs === link) {
      dep.subs = prevSub
      if (!prevSub && dep.computed) {
        dep.computed.flags &= ~4 /* TRACKING */
        for (let l = dep.computed.deps; l; l = l.nextDep) {
          removeSub(l, true)
        }
      }
    }
    if (!soft && !--dep.sc && dep.map) {
      dep.map.delete(dep.key)
    }
  }
  function removeDep(link) {
    const { prevDep, nextDep } = link
    if (prevDep) {
      prevDep.nextDep = nextDep
      link.prevDep = void 0
    }
    if (nextDep) {
      nextDep.prevDep = prevDep
      link.nextDep = void 0
    }
  }
  function effect(fn, options) {
    if (fn.effect instanceof ReactiveEffect) {
      fn = fn.effect.fn
    }
    const e = new ReactiveEffect(fn)
    if (options) {
      extend(e, options)
    }
    try {
      e.run()
    } catch (err) {
      e.stop()
      throw err
    }
    const runner = e.run.bind(e)
    runner.effect = e
    return runner
  }
  function stop(runner) {
    runner.effect.stop()
  }
  var shouldTrack = true
  var trackStack = []
  function pauseTracking() {
    trackStack.push(shouldTrack)
    shouldTrack = false
  }
  function enableTracking() {
    trackStack.push(shouldTrack)
    shouldTrack = true
  }
  function resetTracking() {
    const last = trackStack.pop()
    shouldTrack = last === void 0 ? true : last
  }
  function onEffectCleanup(fn, failSilently = false) {
    if (activeSub instanceof ReactiveEffect) {
      activeSub.cleanup = fn
    } else if (!failSilently) {
      warn(
        `onEffectCleanup() was called when there was no active effect to associate with.`,
      )
    }
  }
  function cleanupEffect(e) {
    const { cleanup } = e
    e.cleanup = void 0
    if (cleanup) {
      const prevSub = activeSub
      activeSub = void 0
      try {
        cleanup()
      } finally {
        activeSub = prevSub
      }
    }
  }

  // packages/reactivity/src/dep.ts
  var globalVersion = 0
  var Link = class {
    constructor(sub, dep) {
      this.sub = sub
      this.dep = dep
      this.version = dep.version
      this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0
    }
  }
  var Dep = class {
    // TODO isolatedDeclarations ReactiveFlags.SKIP
    constructor(computed2) {
      this.computed = computed2
      this.version = 0
      /**
       * Link between this dep and the current active effect
       */
      this.activeLink = void 0
      /**
       * Doubly linked list representing the subscribing effects (tail)
       */
      this.subs = void 0
      /**
       * For object property deps cleanup
       */
      this.map = void 0
      this.key = void 0
      /**
       * Subscriber counter
       */
      this.sc = 0
      /**
       * @internal
       */
      this.__v_skip = true
      if (true) {
        this.subsHead = void 0
      }
    }
    track(debugInfo) {
      if (!activeSub || !shouldTrack || activeSub === this.computed) {
        return
      }
      let link = this.activeLink
      if (link === void 0 || link.sub !== activeSub) {
        link = this.activeLink = new Link(activeSub, this)
        if (!activeSub.deps) {
          activeSub.deps = activeSub.depsTail = link
        } else {
          link.prevDep = activeSub.depsTail
          activeSub.depsTail.nextDep = link
          activeSub.depsTail = link
        }
        addSub(link)
      } else if (link.version === -1) {
        link.version = this.version
        if (link.nextDep) {
          const next = link.nextDep
          next.prevDep = link.prevDep
          if (link.prevDep) {
            link.prevDep.nextDep = next
          }
          link.prevDep = activeSub.depsTail
          link.nextDep = void 0
          activeSub.depsTail.nextDep = link
          activeSub.depsTail = link
          if (activeSub.deps === link) {
            activeSub.deps = next
          }
        }
      }
      if (activeSub.onTrack) {
        activeSub.onTrack(
          extend(
            {
              effect: activeSub,
            },
            debugInfo,
          ),
        )
      }
      return link
    }
    trigger(debugInfo) {
      this.version++
      globalVersion++
      this.notify(debugInfo)
    }
    notify(debugInfo) {
      startBatch()
      try {
        if (true) {
          for (let head = this.subsHead; head; head = head.nextSub) {
            if (head.sub.onTrigger && !((head.sub.flags & 8) /* NOTIFIED */)) {
              head.sub.onTrigger(
                extend(
                  {
                    effect: head.sub,
                  },
                  debugInfo,
                ),
              )
            }
          }
        }
        for (let link = this.subs; link; link = link.prevSub) {
          if (link.sub.notify()) {
            link.sub.dep.notify()
          }
        }
      } finally {
        endBatch()
      }
    }
  }
  function addSub(link) {
    link.dep.sc++
    if (link.sub.flags & 4 /* TRACKING */) {
      const computed2 = link.dep.computed
      if (computed2 && !link.dep.subs) {
        computed2.flags |= 4 /* TRACKING */ | 16 /* DIRTY */
        for (let l = computed2.deps; l; l = l.nextDep) {
          addSub(l)
        }
      }
      const currentTail = link.dep.subs
      if (currentTail !== link) {
        link.prevSub = currentTail
        if (currentTail) currentTail.nextSub = link
      }
      if (link.dep.subsHead === void 0) {
        link.dep.subsHead = link
      }
      link.dep.subs = link
    }
  }
  var targetMap = /* @__PURE__ */ new WeakMap()
  var ITERATE_KEY = /* @__PURE__ */ Symbol(true ? 'Object iterate' : '')
  var MAP_KEY_ITERATE_KEY = /* @__PURE__ */ Symbol(
    true ? 'Map keys iterate' : '',
  )
  var ARRAY_ITERATE_KEY = /* @__PURE__ */ Symbol(true ? 'Array iterate' : '')
  function track(target, type, key) {
    if (shouldTrack && activeSub) {
      let depsMap = targetMap.get(target)
      if (!depsMap) {
        targetMap.set(target, (depsMap = /* @__PURE__ */ new Map()))
      }
      let dep = depsMap.get(key)
      if (!dep) {
        depsMap.set(key, (dep = new Dep()))
        dep.map = depsMap
        dep.key = key
      }
      if (true) {
        dep.track({
          target,
          type,
          key,
        })
      } else {
        dep.track()
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target)
    if (!depsMap) {
      globalVersion++
      return
    }
    const run = (dep) => {
      if (dep) {
        if (true) {
          dep.trigger({
            target,
            type,
            key,
            newValue,
            oldValue,
            oldTarget,
          })
        } else {
          dep.trigger()
        }
      }
    }
    startBatch()
    if (type === 'clear' /* CLEAR */) {
      depsMap.forEach(run)
    } else {
      const targetIsArray = isArray(target)
      const isArrayIndex = targetIsArray && isIntegerKey(key)
      if (targetIsArray && key === 'length') {
        const newLength = Number(newValue)
        depsMap.forEach((dep, key2) => {
          if (
            key2 === 'length' ||
            key2 === ARRAY_ITERATE_KEY ||
            (!isSymbol(key2) && key2 >= newLength)
          ) {
            run(dep)
          }
        })
      } else {
        if (key !== void 0 || depsMap.has(void 0)) {
          run(depsMap.get(key))
        }
        if (isArrayIndex) {
          run(depsMap.get(ARRAY_ITERATE_KEY))
        }
        switch (type) {
          case 'add' /* ADD */:
            if (!targetIsArray) {
              run(depsMap.get(ITERATE_KEY))
              if (isMap(target)) {
                run(depsMap.get(MAP_KEY_ITERATE_KEY))
              }
            } else if (isArrayIndex) {
              run(depsMap.get('length'))
            }
            break
          case 'delete' /* DELETE */:
            if (!targetIsArray) {
              run(depsMap.get(ITERATE_KEY))
              if (isMap(target)) {
                run(depsMap.get(MAP_KEY_ITERATE_KEY))
              }
            }
            break
          case 'set' /* SET */:
            if (isMap(target)) {
              run(depsMap.get(ITERATE_KEY))
            }
            break
        }
      }
    }
    endBatch()
  }
  function getDepFromReactive(object, key) {
    const depMap = targetMap.get(object)
    return depMap && depMap.get(key)
  }

  // packages/reactivity/src/arrayInstrumentations.ts
  function reactiveReadArray(array) {
    const raw = toRaw(array)
    if (raw === array) return raw
    track(raw, 'iterate' /* ITERATE */, ARRAY_ITERATE_KEY)
    return isShallow(array) ? raw : raw.map(toReactive)
  }
  function shallowReadArray(arr) {
    track((arr = toRaw(arr)), 'iterate' /* ITERATE */, ARRAY_ITERATE_KEY)
    return arr
  }
  function toWrapped(target, item) {
    if (isReadonly(target)) {
      return isReactive(target)
        ? toReadonly(toReactive(item))
        : toReadonly(item)
    }
    return toReactive(item)
  }
  var arrayInstrumentations = {
    __proto__: null,
    [Symbol.iterator]() {
      return iterator(this, Symbol.iterator, (item) => toWrapped(this, item))
    },
    concat(...args) {
      return reactiveReadArray(this).concat(
        ...args.map((x) => (isArray(x) ? reactiveReadArray(x) : x)),
      )
    },
    entries() {
      return iterator(this, 'entries', (value) => {
        value[1] = toWrapped(this, value[1])
        return value
      })
    },
    every(fn, thisArg) {
      return apply(this, 'every', fn, thisArg, void 0, arguments)
    },
    filter(fn, thisArg) {
      return apply(
        this,
        'filter',
        fn,
        thisArg,
        (v) => v.map((item) => toWrapped(this, item)),
        arguments,
      )
    },
    find(fn, thisArg) {
      return apply(
        this,
        'find',
        fn,
        thisArg,
        (item) => toWrapped(this, item),
        arguments,
      )
    },
    findIndex(fn, thisArg) {
      return apply(this, 'findIndex', fn, thisArg, void 0, arguments)
    },
    findLast(fn, thisArg) {
      return apply(
        this,
        'findLast',
        fn,
        thisArg,
        (item) => toWrapped(this, item),
        arguments,
      )
    },
    findLastIndex(fn, thisArg) {
      return apply(this, 'findLastIndex', fn, thisArg, void 0, arguments)
    },
    // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
    forEach(fn, thisArg) {
      return apply(this, 'forEach', fn, thisArg, void 0, arguments)
    },
    includes(...args) {
      return searchProxy(this, 'includes', args)
    },
    indexOf(...args) {
      return searchProxy(this, 'indexOf', args)
    },
    join(separator) {
      return reactiveReadArray(this).join(separator)
    },
    // keys() iterator only reads `length`, no optimization required
    lastIndexOf(...args) {
      return searchProxy(this, 'lastIndexOf', args)
    },
    map(fn, thisArg) {
      return apply(this, 'map', fn, thisArg, void 0, arguments)
    },
    pop() {
      return noTracking(this, 'pop')
    },
    push(...args) {
      return noTracking(this, 'push', args)
    },
    reduce(fn, ...args) {
      return reduce(this, 'reduce', fn, args)
    },
    reduceRight(fn, ...args) {
      return reduce(this, 'reduceRight', fn, args)
    },
    shift() {
      return noTracking(this, 'shift')
    },
    // slice could use ARRAY_ITERATE but also seems to beg for range tracking
    some(fn, thisArg) {
      return apply(this, 'some', fn, thisArg, void 0, arguments)
    },
    splice(...args) {
      return noTracking(this, 'splice', args)
    },
    toReversed() {
      return reactiveReadArray(this).toReversed()
    },
    toSorted(comparer) {
      return reactiveReadArray(this).toSorted(comparer)
    },
    toSpliced(...args) {
      return reactiveReadArray(this).toSpliced(...args)
    },
    unshift(...args) {
      return noTracking(this, 'unshift', args)
    },
    values() {
      return iterator(this, 'values', (item) => toWrapped(this, item))
    },
  }
  function iterator(self2, method, wrapValue) {
    const arr = shallowReadArray(self2)
    const iter = arr[method]()
    if (arr !== self2 && !isShallow(self2)) {
      iter._next = iter.next
      iter.next = () => {
        const result = iter._next()
        if (!result.done) {
          result.value = wrapValue(result.value)
        }
        return result
      }
    }
    return iter
  }
  var arrayProto = Array.prototype
  function apply(self2, method, fn, thisArg, wrappedRetFn, args) {
    const arr = shallowReadArray(self2)
    const needsWrap = arr !== self2 && !isShallow(self2)
    const methodFn = arr[method]
    if (methodFn !== arrayProto[method]) {
      const result2 = methodFn.apply(self2, args)
      return needsWrap ? toReactive(result2) : result2
    }
    let wrappedFn = fn
    if (arr !== self2) {
      if (needsWrap) {
        wrappedFn = function (item, index) {
          return fn.call(this, toWrapped(self2, item), index, self2)
        }
      } else if (fn.length > 2) {
        wrappedFn = function (item, index) {
          return fn.call(this, item, index, self2)
        }
      }
    }
    const result = methodFn.call(arr, wrappedFn, thisArg)
    return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result
  }
  function reduce(self2, method, fn, args) {
    const arr = shallowReadArray(self2)
    let wrappedFn = fn
    if (arr !== self2) {
      if (!isShallow(self2)) {
        wrappedFn = function (acc, item, index) {
          return fn.call(this, acc, toWrapped(self2, item), index, self2)
        }
      } else if (fn.length > 3) {
        wrappedFn = function (acc, item, index) {
          return fn.call(this, acc, item, index, self2)
        }
      }
    }
    return arr[method](wrappedFn, ...args)
  }
  function searchProxy(self2, method, args) {
    const arr = toRaw(self2)
    track(arr, 'iterate' /* ITERATE */, ARRAY_ITERATE_KEY)
    const res = arr[method](...args)
    if ((res === -1 || res === false) && isProxy(args[0])) {
      args[0] = toRaw(args[0])
      return arr[method](...args)
    }
    return res
  }
  function noTracking(self2, method, args = []) {
    pauseTracking()
    startBatch()
    const res = toRaw(self2)[method].apply(self2, args)
    endBatch()
    resetTracking()
    return res
  }

  // packages/reactivity/src/baseHandlers.ts
  var isNonTrackableKeys = /* @__PURE__ */ makeMap(
    `__proto__,__v_isRef,__isVue`,
  )
  var builtInSymbols = new Set(
    /* @__PURE__ */ Object.getOwnPropertyNames(Symbol)
      .filter((key) => key !== 'arguments' && key !== 'caller')
      .map((key) => Symbol[key])
      .filter(isSymbol),
  )
  function hasOwnProperty2(key) {
    if (!isSymbol(key)) key = String(key)
    const obj = toRaw(this)
    track(obj, 'has' /* HAS */, key)
    return obj.hasOwnProperty(key)
  }
  var BaseReactiveHandler = class {
    constructor(_isReadonly = false, _isShallow = false) {
      this._isReadonly = _isReadonly
      this._isShallow = _isShallow
    }
    get(target, key, receiver) {
      if (key === '__v_skip' /* SKIP */) return target['__v_skip' /* SKIP */]
      const isReadonly2 = this._isReadonly,
        isShallow2 = this._isShallow
      if (key === '__v_isReactive' /* IS_REACTIVE */) {
        return !isReadonly2
      } else if (key === '__v_isReadonly' /* IS_READONLY */) {
        return isReadonly2
      } else if (key === '__v_isShallow' /* IS_SHALLOW */) {
        return isShallow2
      } else if (key === '__v_raw' /* RAW */) {
        if (
          receiver ===
            (isReadonly2
              ? isShallow2
                ? shallowReadonlyMap
                : readonlyMap
              : isShallow2
                ? shallowReactiveMap
                : reactiveMap
            ).get(target) || // receiver is not the reactive proxy, but has the same prototype
          // this means the receiver is a user proxy of the reactive proxy
          Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)
        ) {
          return target
        }
        return
      }
      const targetIsArray = isArray(target)
      if (!isReadonly2) {
        let fn
        if (targetIsArray && (fn = arrayInstrumentations[key])) {
          return fn
        }
        if (key === 'hasOwnProperty') {
          return hasOwnProperty2
        }
      }
      const res = Reflect.get(
        target,
        key,
        // if this is a proxy wrapping a ref, return methods using the raw ref
        // as receiver so that we don't have to call `toRaw` on the ref in all
        // its class methods
        isRef(target) ? target : receiver,
      )
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res
      }
      if (!isReadonly2) {
        track(target, 'get' /* GET */, key)
      }
      if (isShallow2) {
        return res
      }
      if (isRef(res)) {
        const value = targetIsArray && isIntegerKey(key) ? res : res.value
        return isReadonly2 && isObject(value) ? readonly(value) : value
      }
      if (isObject(res)) {
        return isReadonly2 ? readonly(res) : reactive(res)
      }
      return res
    }
  }
  var MutableReactiveHandler = class extends BaseReactiveHandler {
    constructor(isShallow2 = false) {
      super(false, isShallow2)
    }
    set(target, key, value, receiver) {
      let oldValue = target[key]
      const isArrayWithIntegerKey = isArray(target) && isIntegerKey(key)
      if (!this._isShallow) {
        const isOldValueReadonly = isReadonly(oldValue)
        if (!isShallow(value) && !isReadonly(value)) {
          oldValue = toRaw(oldValue)
          value = toRaw(value)
        }
        if (!isArrayWithIntegerKey && isRef(oldValue) && !isRef(value)) {
          if (isOldValueReadonly) {
            if (true) {
              warn(
                `Set operation on key "${String(key)}" failed: target is readonly.`,
                target[key],
              )
            }
            return true
          } else {
            oldValue.value = value
            return true
          }
        }
      } else {
      }
      const hadKey = isArrayWithIntegerKey
        ? Number(key) < target.length
        : hasOwn(target, key)
      const result = Reflect.set(
        target,
        key,
        value,
        isRef(target) ? target : receiver,
      )
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, 'add' /* ADD */, key, value)
        } else if (hasChanged(value, oldValue)) {
          trigger(target, 'set' /* SET */, key, value, oldValue)
        }
      }
      return result
    }
    deleteProperty(target, key) {
      const hadKey = hasOwn(target, key)
      const oldValue = target[key]
      const result = Reflect.deleteProperty(target, key)
      if (result && hadKey) {
        trigger(target, 'delete' /* DELETE */, key, void 0, oldValue)
      }
      return result
    }
    has(target, key) {
      const result = Reflect.has(target, key)
      if (!isSymbol(key) || !builtInSymbols.has(key)) {
        track(target, 'has' /* HAS */, key)
      }
      return result
    }
    ownKeys(target) {
      track(
        target,
        'iterate' /* ITERATE */,
        isArray(target) ? 'length' : ITERATE_KEY,
      )
      return Reflect.ownKeys(target)
    }
  }
  var ReadonlyReactiveHandler = class extends BaseReactiveHandler {
    constructor(isShallow2 = false) {
      super(true, isShallow2)
    }
    set(target, key) {
      if (true) {
        warn(
          `Set operation on key "${String(key)}" failed: target is readonly.`,
          target,
        )
      }
      return true
    }
    deleteProperty(target, key) {
      if (true) {
        warn(
          `Delete operation on key "${String(key)}" failed: target is readonly.`,
          target,
        )
      }
      return true
    }
  }
  var mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler()
  var readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler()
  var shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true)
  var shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(
    true,
  )

  // packages/reactivity/src/collectionHandlers.ts
  var toShallow = (value) => value
  var getProto = (v) => Reflect.getPrototypeOf(v)
  function createIterableMethod(method, isReadonly2, isShallow2) {
    return function (...args) {
      const target = this['__v_raw' /* RAW */]
      const rawTarget = toRaw(target)
      const targetIsMap = isMap(rawTarget)
      const isPair =
        method === 'entries' || (method === Symbol.iterator && targetIsMap)
      const isKeyOnly = method === 'keys' && targetIsMap
      const innerIterator = target[method](...args)
      const wrap = isShallow2
        ? toShallow
        : isReadonly2
          ? toReadonly
          : toReactive
      !isReadonly2 &&
        track(
          rawTarget,
          'iterate' /* ITERATE */,
          isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY,
        )
      return extend(
        // inheriting all iterator properties
        Object.create(innerIterator),
        {
          // iterator protocol
          next() {
            const { value, done } = innerIterator.next()
            return done
              ? { value, done }
              : {
                  value: isPair
                    ? [wrap(value[0]), wrap(value[1])]
                    : wrap(value),
                  done,
                }
          },
        },
      )
    }
  }
  function createReadonlyMethod(type) {
    return function (...args) {
      if (true) {
        const key = args[0] ? `on key "${args[0]}" ` : ``
        warn(
          `${capitalize(type)} operation ${key}failed: target is readonly.`,
          toRaw(this),
        )
      }
      return type === 'delete' /* DELETE */
        ? false
        : type === 'clear' /* CLEAR */
          ? void 0
          : this
    }
  }
  function createInstrumentations(readonly2, shallow) {
    const instrumentations = {
      get(key) {
        const target = this['__v_raw' /* RAW */]
        const rawTarget = toRaw(target)
        const rawKey = toRaw(key)
        if (!readonly2) {
          if (hasChanged(key, rawKey)) {
            track(rawTarget, 'get' /* GET */, key)
          }
          track(rawTarget, 'get' /* GET */, rawKey)
        }
        const { has } = getProto(rawTarget)
        const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive
        if (has.call(rawTarget, key)) {
          return wrap(target.get(key))
        } else if (has.call(rawTarget, rawKey)) {
          return wrap(target.get(rawKey))
        } else if (target !== rawTarget) {
          target.get(key)
        }
      },
      get size() {
        const target = this['__v_raw' /* RAW */]
        !readonly2 && track(toRaw(target), 'iterate' /* ITERATE */, ITERATE_KEY)
        return target.size
      },
      has(key) {
        const target = this['__v_raw' /* RAW */]
        const rawTarget = toRaw(target)
        const rawKey = toRaw(key)
        if (!readonly2) {
          if (hasChanged(key, rawKey)) {
            track(rawTarget, 'has' /* HAS */, key)
          }
          track(rawTarget, 'has' /* HAS */, rawKey)
        }
        return key === rawKey
          ? target.has(key)
          : target.has(key) || target.has(rawKey)
      },
      forEach(callback, thisArg) {
        const observed = this
        const target = observed['__v_raw' /* RAW */]
        const rawTarget = toRaw(target)
        const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive
        !readonly2 && track(rawTarget, 'iterate' /* ITERATE */, ITERATE_KEY)
        return target.forEach((value, key) => {
          return callback.call(thisArg, wrap(value), wrap(key), observed)
        })
      },
    }
    extend(
      instrumentations,
      readonly2
        ? {
            add: createReadonlyMethod('add' /* ADD */),
            set: createReadonlyMethod('set' /* SET */),
            delete: createReadonlyMethod('delete' /* DELETE */),
            clear: createReadonlyMethod('clear' /* CLEAR */),
          }
        : {
            add(value) {
              if (!shallow && !isShallow(value) && !isReadonly(value)) {
                value = toRaw(value)
              }
              const target = toRaw(this)
              const proto = getProto(target)
              const hadKey = proto.has.call(target, value)
              if (!hadKey) {
                target.add(value)
                trigger(target, 'add' /* ADD */, value, value)
              }
              return this
            },
            set(key, value) {
              if (!shallow && !isShallow(value) && !isReadonly(value)) {
                value = toRaw(value)
              }
              const target = toRaw(this)
              const { has, get } = getProto(target)
              let hadKey = has.call(target, key)
              if (!hadKey) {
                key = toRaw(key)
                hadKey = has.call(target, key)
              } else if (true) {
                checkIdentityKeys(target, has, key)
              }
              const oldValue = get.call(target, key)
              target.set(key, value)
              if (!hadKey) {
                trigger(target, 'add' /* ADD */, key, value)
              } else if (hasChanged(value, oldValue)) {
                trigger(target, 'set' /* SET */, key, value, oldValue)
              }
              return this
            },
            delete(key) {
              const target = toRaw(this)
              const { has, get } = getProto(target)
              let hadKey = has.call(target, key)
              if (!hadKey) {
                key = toRaw(key)
                hadKey = has.call(target, key)
              } else if (true) {
                checkIdentityKeys(target, has, key)
              }
              const oldValue = get ? get.call(target, key) : void 0
              const result = target.delete(key)
              if (hadKey) {
                trigger(target, 'delete' /* DELETE */, key, void 0, oldValue)
              }
              return result
            },
            clear() {
              const target = toRaw(this)
              const hadItems = target.size !== 0
              const oldTarget = true
                ? isMap(target)
                  ? new Map(target)
                  : new Set(target)
                : void 0
              const result = target.clear()
              if (hadItems) {
                trigger(target, 'clear' /* CLEAR */, void 0, void 0, oldTarget)
              }
              return result
            },
          },
    )
    const iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator]
    iteratorMethods.forEach((method) => {
      instrumentations[method] = createIterableMethod(
        method,
        readonly2,
        shallow,
      )
    })
    return instrumentations
  }
  function createInstrumentationGetter(isReadonly2, shallow) {
    const instrumentations = createInstrumentations(isReadonly2, shallow)
    return (target, key, receiver) => {
      if (key === '__v_isReactive' /* IS_REACTIVE */) {
        return !isReadonly2
      } else if (key === '__v_isReadonly' /* IS_READONLY */) {
        return isReadonly2
      } else if (key === '__v_raw' /* RAW */) {
        return target
      }
      return Reflect.get(
        hasOwn(instrumentations, key) && key in target
          ? instrumentations
          : target,
        key,
        receiver,
      )
    }
  }
  var mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false),
  }
  var shallowCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, true),
  }
  var readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false),
  }
  var shallowReadonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, true),
  }
  function checkIdentityKeys(target, has, key) {
    const rawKey = toRaw(key)
    if (rawKey !== key && has.call(target, rawKey)) {
      const type = toRawType(target)
      warn(
        `Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`,
      )
    }
  }

  // packages/reactivity/src/reactive.ts
  var reactiveMap = /* @__PURE__ */ new WeakMap()
  var shallowReactiveMap = /* @__PURE__ */ new WeakMap()
  var readonlyMap = /* @__PURE__ */ new WeakMap()
  var shallowReadonlyMap = /* @__PURE__ */ new WeakMap()
  function targetTypeMap(rawType) {
    switch (rawType) {
      case 'Object':
      case 'Array':
        return 1 /* COMMON */
      case 'Map':
      case 'Set':
      case 'WeakMap':
      case 'WeakSet':
        return 2 /* COLLECTION */
      default:
        return 0 /* INVALID */
    }
  }
  function getTargetType(value) {
    return value['__v_skip' /* SKIP */] || !Object.isExtensible(value)
      ? 0 /* INVALID */
      : targetTypeMap(toRawType(value))
  }
  // @__NO_SIDE_EFFECTS__
  function reactive(target) {
    if (/* @__PURE__ */ isReadonly(target)) {
      return target
    }
    return createReactiveObject(
      target,
      false,
      mutableHandlers,
      mutableCollectionHandlers,
      reactiveMap,
    )
  }
  // @__NO_SIDE_EFFECTS__
  function shallowReactive(target) {
    return createReactiveObject(
      target,
      false,
      shallowReactiveHandlers,
      shallowCollectionHandlers,
      shallowReactiveMap,
    )
  }
  // @__NO_SIDE_EFFECTS__
  function readonly(target) {
    return createReactiveObject(
      target,
      true,
      readonlyHandlers,
      readonlyCollectionHandlers,
      readonlyMap,
    )
  }
  // @__NO_SIDE_EFFECTS__
  function shallowReadonly(target) {
    return createReactiveObject(
      target,
      true,
      shallowReadonlyHandlers,
      shallowReadonlyCollectionHandlers,
      shallowReadonlyMap,
    )
  }
  function createReactiveObject(
    target,
    isReadonly2,
    baseHandlers,
    collectionHandlers,
    proxyMap,
  ) {
    if (!isObject(target)) {
      if (true) {
        warn(
          `value cannot be made ${isReadonly2 ? 'readonly' : 'reactive'}: ${String(
            target,
          )}`,
        )
      }
      return target
    }
    if (
      target['__v_raw' /* RAW */] &&
      !(isReadonly2 && target['__v_isReactive' /* IS_REACTIVE */])
    ) {
      return target
    }
    const targetType = getTargetType(target)
    if (targetType === 0 /* INVALID */) {
      return target
    }
    const existingProxy = proxyMap.get(target)
    if (existingProxy) {
      return existingProxy
    }
    const proxy = new Proxy(
      target,
      targetType === 2 /* COLLECTION */ ? collectionHandlers : baseHandlers,
    )
    proxyMap.set(target, proxy)
    return proxy
  }
  // @__NO_SIDE_EFFECTS__
  function isReactive(value) {
    if (/* @__PURE__ */ isReadonly(value)) {
      return /* @__PURE__ */ isReactive(value['__v_raw' /* RAW */])
    }
    return !!(value && value['__v_isReactive' /* IS_REACTIVE */])
  }
  // @__NO_SIDE_EFFECTS__
  function isReadonly(value) {
    return !!(value && value['__v_isReadonly' /* IS_READONLY */])
  }
  // @__NO_SIDE_EFFECTS__
  function isShallow(value) {
    return !!(value && value['__v_isShallow' /* IS_SHALLOW */])
  }
  // @__NO_SIDE_EFFECTS__
  function isProxy(value) {
    return value ? !!value['__v_raw' /* RAW */] : false
  }
  // @__NO_SIDE_EFFECTS__
  function toRaw(observed) {
    const raw = observed && observed['__v_raw' /* RAW */]
    return raw ? /* @__PURE__ */ toRaw(raw) : observed
  }
  function markRaw(value) {
    if (!hasOwn(value, '__v_skip' /* SKIP */) && Object.isExtensible(value)) {
      def(value, '__v_skip' /* SKIP */, true)
    }
    return value
  }
  var toReactive = (value) =>
    isObject(value) ? /* @__PURE__ */ reactive(value) : value
  var toReadonly = (value) =>
    isObject(value) ? /* @__PURE__ */ readonly(value) : value

  // packages/reactivity/src/ref.ts
  // @__NO_SIDE_EFFECTS__
  function isRef(r) {
    return r ? r['__v_isRef' /* IS_REF */] === true : false
  }
  // @__NO_SIDE_EFFECTS__
  function ref(value) {
    return createRef(value, false)
  }
  // @__NO_SIDE_EFFECTS__
  function shallowRef(value) {
    return createRef(value, true)
  }
  function createRef(rawValue, shallow) {
    if (/* @__PURE__ */ isRef(rawValue)) {
      return rawValue
    }
    return new RefImpl(rawValue, shallow)
  }
  var _a, _b
  ;((_b = '__v_isRef') /* IS_REF */, (_a = '__v_isShallow')) /* IS_SHALLOW */
  var RefImpl = class {
    constructor(value, isShallow2) {
      this.dep = new Dep()
      this[_b] = true
      this[_a] = false
      this._rawValue = isShallow2 ? value : toRaw(value)
      this._value = isShallow2 ? value : toReactive(value)
      this['__v_isShallow' /* IS_SHALLOW */] = isShallow2
    }
    get value() {
      if (true) {
        this.dep.track({
          target: this,
          type: 'get' /* GET */,
          key: 'value',
        })
      } else {
        this.dep.track()
      }
      return this._value
    }
    set value(newValue) {
      const oldValue = this._rawValue
      const useDirectValue =
        this['__v_isShallow' /* IS_SHALLOW */] ||
        isShallow(newValue) ||
        isReadonly(newValue)
      newValue = useDirectValue ? newValue : toRaw(newValue)
      if (hasChanged(newValue, oldValue)) {
        this._rawValue = newValue
        this._value = useDirectValue ? newValue : toReactive(newValue)
        if (true) {
          this.dep.trigger({
            target: this,
            type: 'set' /* SET */,
            key: 'value',
            newValue,
            oldValue,
          })
        } else {
          this.dep.trigger()
        }
      }
    }
  }
  function triggerRef(ref2) {
    if (ref2.dep) {
      if (true) {
        ref2.dep.trigger({
          target: ref2,
          type: 'set' /* SET */,
          key: 'value',
          newValue: ref2._value,
        })
      } else {
        ref2.dep.trigger()
      }
    }
  }
  function unref(ref2) {
    return /* @__PURE__ */ isRef(ref2) ? ref2.value : ref2
  }
  function toValue(source) {
    return isFunction(source) ? source() : unref(source)
  }
  var shallowUnwrapHandlers = {
    get: (target, key, receiver) =>
      key === '__v_raw' /* RAW */
        ? target
        : unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) => {
      const oldValue = target[key]
      if (/* @__PURE__ */ isRef(oldValue) && !(/* @__PURE__ */ isRef(value))) {
        oldValue.value = value
        return true
      } else {
        return Reflect.set(target, key, value, receiver)
      }
    },
  }
  function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs)
      ? objectWithRefs
      : new Proxy(objectWithRefs, shallowUnwrapHandlers)
  }
  var _a2
  _a2 = '__v_isRef' /* IS_REF */
  var CustomRefImpl = class {
    constructor(factory) {
      this[_a2] = true
      this._value = void 0
      const dep = (this.dep = new Dep())
      const { get, set } = factory(dep.track.bind(dep), dep.trigger.bind(dep))
      this._get = get
      this._set = set
    }
    get value() {
      return (this._value = this._get())
    }
    set value(newVal) {
      this._set(newVal)
    }
  }
  function customRef(factory) {
    return new CustomRefImpl(factory)
  }
  // @__NO_SIDE_EFFECTS__
  function toRefs(object) {
    if (!isProxy(object)) {
      warn(`toRefs() expects a reactive object but received a plain one.`)
    }
    const ret = isArray(object) ? new Array(object.length) : {}
    for (const key in object) {
      ret[key] = propertyToRef(object, key)
    }
    return ret
  }
  var _a3
  _a3 = '__v_isRef' /* IS_REF */
  var ObjectRefImpl = class {
    constructor(_object, _key, _defaultValue) {
      this._object = _object
      this._key = _key
      this._defaultValue = _defaultValue
      this[_a3] = true
      this._value = void 0
      this._raw = toRaw(_object)
      let shallow = true
      let obj = _object
      if (!isArray(_object) || !isIntegerKey(String(_key))) {
        do {
          shallow = !isProxy(obj) || isShallow(obj)
        } while (shallow && (obj = obj['__v_raw' /* RAW */]))
      }
      this._shallow = shallow
    }
    get value() {
      let val = this._object[this._key]
      if (this._shallow) {
        val = unref(val)
      }
      return (this._value = val === void 0 ? this._defaultValue : val)
    }
    set value(newVal) {
      if (this._shallow && /* @__PURE__ */ isRef(this._raw[this._key])) {
        const nestedRef = this._object[this._key]
        if (/* @__PURE__ */ isRef(nestedRef)) {
          nestedRef.value = newVal
          return
        }
      }
      this._object[this._key] = newVal
    }
    get dep() {
      return getDepFromReactive(this._raw, this._key)
    }
  }
  var _a4, _b2
  ;((_b2 = '__v_isRef') /* IS_REF */,
    (_a4 = '__v_isReadonly')) /* IS_READONLY */
  var GetterRefImpl = class {
    constructor(_getter) {
      this._getter = _getter
      this[_b2] = true
      this[_a4] = true
      this._value = void 0
    }
    get value() {
      return (this._value = this._getter())
    }
  }
  // @__NO_SIDE_EFFECTS__
  function toRef(source, key, defaultValue) {
    if (/* @__PURE__ */ isRef(source)) {
      return source
    } else if (isFunction(source)) {
      return new GetterRefImpl(source)
    } else if (isObject(source) && arguments.length > 1) {
      return propertyToRef(source, key, defaultValue)
    } else {
      return /* @__PURE__ */ ref(source)
    }
  }
  function propertyToRef(source, key, defaultValue) {
    return new ObjectRefImpl(source, key, defaultValue)
  }

  // packages/reactivity/src/computed.ts
  var ComputedRefImpl = class {
    constructor(fn, setter, isSSR) {
      this.fn = fn
      this.setter = setter
      /**
       * @internal
       */
      this._value = void 0
      /**
       * @internal
       */
      this.dep = new Dep(this)
      /**
       * @internal
       */
      this.__v_isRef = true
      // TODO isolatedDeclarations ReactiveFlags.IS_READONLY
      // A computed is also a subscriber that tracks other deps
      /**
       * @internal
       */
      this.deps = void 0
      /**
       * @internal
       */
      this.depsTail = void 0
      /**
       * @internal
       */
      this.flags = 16 /* DIRTY */
      /**
       * @internal
       */
      this.globalVersion = globalVersion - 1
      /**
       * @internal
       */
      this.next = void 0
      // for backwards compat
      this.effect = this
      this['__v_isReadonly' /* IS_READONLY */] = !setter
      this.isSSR = isSSR
    }
    /**
     * @internal
     */
    notify() {
      this.flags |= 16 /* DIRTY */
      if (
        !((this.flags & 8) /* NOTIFIED */) && // avoid infinite self recursion
        activeSub !== this
      ) {
        batch(this, true)
        return true
      } else if (true) {
      }
    }
    get value() {
      const link = true
        ? this.dep.track({
            target: this,
            type: 'get' /* GET */,
            key: 'value',
          })
        : this.dep.track()
      refreshComputed(this)
      if (link) {
        link.version = this.dep.version
      }
      return this._value
    }
    set value(newValue) {
      if (this.setter) {
        this.setter(newValue)
      } else if (true) {
        warn('Write operation failed: computed value is readonly')
      }
    }
  }
  // @__NO_SIDE_EFFECTS__
  function computed(getterOrOptions, debugOptions, isSSR = false) {
    let getter
    let setter
    if (isFunction(getterOrOptions)) {
      getter = getterOrOptions
    } else {
      getter = getterOrOptions.get
      setter = getterOrOptions.set
    }
    const cRef = new ComputedRefImpl(getter, setter, isSSR)
    if (debugOptions && !isSSR) {
      cRef.onTrack = debugOptions.onTrack
      cRef.onTrigger = debugOptions.onTrigger
    }
    return cRef
  }

  // packages/reactivity/src/watch.ts
  var WatchErrorCodes = /* @__PURE__ */ ((WatchErrorCodes2) => {
    WatchErrorCodes2[(WatchErrorCodes2['WATCH_GETTER'] = 2)] = 'WATCH_GETTER'
    WatchErrorCodes2[(WatchErrorCodes2['WATCH_CALLBACK'] = 3)] =
      'WATCH_CALLBACK'
    WatchErrorCodes2[(WatchErrorCodes2['WATCH_CLEANUP'] = 4)] = 'WATCH_CLEANUP'
    return WatchErrorCodes2
  })(WatchErrorCodes || {})
  var INITIAL_WATCHER_VALUE = {}
  var cleanupMap = /* @__PURE__ */ new WeakMap()
  var activeWatcher = void 0
  function getCurrentWatcher() {
    return activeWatcher
  }
  function onWatcherCleanup(
    cleanupFn,
    failSilently = false,
    owner = activeWatcher,
  ) {
    if (owner) {
      let cleanups = cleanupMap.get(owner)
      if (!cleanups) cleanupMap.set(owner, (cleanups = []))
      cleanups.push(cleanupFn)
    } else if (!failSilently) {
      warn(
        `onWatcherCleanup() was called when there was no active watcher to associate with.`,
      )
    }
  }
  function watch(source, cb, options = EMPTY_OBJ) {
    const { immediate, deep, once, scheduler, augmentJob, call } = options
    const warnInvalidSource = (s) => {
      ;(options.onWarn || warn)(
        `Invalid watch source: `,
        s,
        `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`,
      )
    }
    const reactiveGetter = (source2) => {
      if (deep) return source2
      if (isShallow(source2) || deep === false || deep === 0)
        return traverse(source2, 1)
      return traverse(source2)
    }
    let effect2
    let getter
    let cleanup
    let boundCleanup
    let forceTrigger = false
    let isMultiSource = false
    if (isRef(source)) {
      getter = () => source.value
      forceTrigger = isShallow(source)
    } else if (isReactive(source)) {
      getter = () => reactiveGetter(source)
      forceTrigger = true
    } else if (isArray(source)) {
      isMultiSource = true
      forceTrigger = source.some((s) => isReactive(s) || isShallow(s))
      getter = () =>
        source.map((s) => {
          if (isRef(s)) {
            return s.value
          } else if (isReactive(s)) {
            return reactiveGetter(s)
          } else if (isFunction(s)) {
            return call ? call(s, 2 /* WATCH_GETTER */) : s()
          } else {
            warnInvalidSource(s)
          }
        })
    } else if (isFunction(source)) {
      if (cb) {
        getter = call ? () => call(source, 2 /* WATCH_GETTER */) : source
      } else {
        getter = () => {
          if (cleanup) {
            pauseTracking()
            try {
              cleanup()
            } finally {
              resetTracking()
            }
          }
          const currentEffect = activeWatcher
          activeWatcher = effect2
          try {
            return call
              ? call(source, 3 /* WATCH_CALLBACK */, [boundCleanup])
              : source(boundCleanup)
          } finally {
            activeWatcher = currentEffect
          }
        }
      }
    } else {
      getter = NOOP
      warnInvalidSource(source)
    }
    if (cb && deep) {
      const baseGetter = getter
      const depth = deep === true ? Infinity : deep
      getter = () => traverse(baseGetter(), depth)
    }
    const scope = getCurrentScope()
    const watchHandle = () => {
      effect2.stop()
      if (scope && scope.active) {
        remove(scope.effects, effect2)
      }
    }
    if (once && cb) {
      const _cb = cb
      cb = (...args) => {
        _cb(...args)
        watchHandle()
      }
    }
    let oldValue = isMultiSource
      ? new Array(source.length).fill(INITIAL_WATCHER_VALUE)
      : INITIAL_WATCHER_VALUE
    const job = (immediateFirstRun) => {
      if (
        !((effect2.flags & 1) /* ACTIVE */) ||
        (!effect2.dirty && !immediateFirstRun)
      ) {
        return
      }
      if (cb) {
        const newValue = effect2.run()
        if (
          deep ||
          forceTrigger ||
          (isMultiSource
            ? newValue.some((v, i) => hasChanged(v, oldValue[i]))
            : hasChanged(newValue, oldValue))
        ) {
          if (cleanup) {
            cleanup()
          }
          const currentWatcher = activeWatcher
          activeWatcher = effect2
          try {
            const args = [
              newValue,
              // pass undefined as the old value when it's changed for the first time
              oldValue === INITIAL_WATCHER_VALUE
                ? void 0
                : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE
                  ? []
                  : oldValue,
              boundCleanup,
            ]
            oldValue = newValue
            call
              ? call(cb, 3 /* WATCH_CALLBACK */, args)
              : // @ts-expect-error
                cb(...args)
          } finally {
            activeWatcher = currentWatcher
          }
        }
      } else {
        effect2.run()
      }
    }
    if (augmentJob) {
      augmentJob(job)
    }
    effect2 = new ReactiveEffect(getter)
    effect2.scheduler = scheduler ? () => scheduler(job, false) : job
    boundCleanup = (fn) => onWatcherCleanup(fn, false, effect2)
    cleanup = effect2.onStop = () => {
      const cleanups = cleanupMap.get(effect2)
      if (cleanups) {
        if (call) {
          call(cleanups, 4 /* WATCH_CLEANUP */)
        } else {
          for (const cleanup2 of cleanups) cleanup2()
        }
        cleanupMap.delete(effect2)
      }
    }
    if (true) {
      effect2.onTrack = options.onTrack
      effect2.onTrigger = options.onTrigger
    }
    if (cb) {
      if (immediate) {
        job(true)
      } else {
        oldValue = effect2.run()
      }
    } else if (scheduler) {
      scheduler(job.bind(null, true), true)
    } else {
      effect2.run()
    }
    watchHandle.pause = effect2.pause.bind(effect2)
    watchHandle.resume = effect2.resume.bind(effect2)
    watchHandle.stop = watchHandle
    return watchHandle
  }
  function traverse(value, depth = Infinity, seen) {
    if (depth <= 0 || !isObject(value) || value['__v_skip' /* SKIP */]) {
      return value
    }
    seen = seen || /* @__PURE__ */ new Map()
    if ((seen.get(value) || 0) >= depth) {
      return value
    }
    seen.set(value, depth)
    depth--
    if (isRef(value)) {
      traverse(value.value, depth, seen)
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        traverse(value[i], depth, seen)
      }
    } else if (isSet(value) || isMap(value)) {
      value.forEach((v) => {
        traverse(v, depth, seen)
      })
    } else if (isPlainObject(value)) {
      for (const key in value) {
        traverse(value[key], depth, seen)
      }
      for (const key of Object.getOwnPropertySymbols(value)) {
        if (Object.prototype.propertyIsEnumerable.call(value, key)) {
          traverse(value[key], depth, seen)
        }
      }
    }
    return value
  }
  return __toCommonJS(index_exports)
})()
//# sourceMappingURL=reactivity.global.js.map
