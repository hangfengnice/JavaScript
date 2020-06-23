// function cb(val) {
//   console.log('视图更新啦～');
// }

const { set } = require("lodash");

// function defineReactive (obj, key, val) {
//   const dep = new Dep()
//   Object.defineProperty(obj, key, {
//     enumerable: true,
//     configurable: true,
//     get: function reactiveGetter() {
//       dep.addsup(Dep.target)
//       return val
//     },
//     set: function reactiveSetter(newVal) {
//       if (newVal == val) return
//       val = newVal
//       // cb(newVal)
//       dep.notify()
//     }
//   })
// }
// function observer(value) {
//   if (!value || typeof value != 'object') {
//     return
//   }
//   Object.keys(value).forEach(key => {
//     defineReactive(value, key, value[key])
//   })
// }




// class Dep {
//   constructor() {
//     this.subs = []
//   }
//   addsup (sub) {
//     this.subs.push(sub)
//   }
//   notify () {
//     this.subs.forEach(sub => sub.update())
//   }
// }

// class Wather{
//   constructor() {
//     Dep.target = this
//   }
//   update() {
//     console.log('视图更新啦～');
//   }
// }
// Dep.target = null

// class Vue {
//   constructor(options) {
//     this._data = options.data
//     observer(this._data)
//     new Wather()
//     // console.log('render~', this._data.test);
//   }
// }
// let o = new Vue({
//   data: {
//     test: 'i am test'
//   }
// })
// o._data.test = 'hello, world'


// class VNode {
//   constructor(tag, data, children, text, elm) {
//     this.tag = tag
//     this.data = data
//     this.children = children
//     this.text = text
//     this.elm = elm
//   }
// }
// function createEmptyVNode (val) {
//   return new VNode(undefined, undefined, undefined, String(val))
// }
// function cloneVNode(node) {
//   return new VNode(node.tag, node.data, node.children, node.text, node.elm)
// }

// var html = '<div :class="c" class="demo" v-if="isShow"><span v-for="item in sz">{{item}}</span></div>';


// function toRawTag(val) {
//   return Object.prototype.toString.call(val).slice(8, -1)
// }
// let ret = toRawTag({})
// console.log(ret);

// console.log(JSON.stringify({}));

// const hyphenateRE = /\B([A-Z])/g
// // const hyphenate = cached((str) => {
// //   return str.replace(hyphenateRE, '-$1').toLowerCase()
// // })

// let ret1 = 'helloWorld'.replace(hyphenateRE, ('-$1')).toLocaleLowerCase()
// console.log(ret1);

//  function extend (to, _from) {
//   for (const key in _from) {
//     to[key] = _from[key]
//   }
//   return to
// }
// function toObject(arr) {
//   const res = {}
//   for (let i = 0; i < arr.length; i ++) {
//     if (arr[i]) {
//       extend(res, arr[i])
//     }
//   }
//   return res
// }
// console.log(toObject([1, 2,3]));

const data = {
  a = 1
}

Object.defineProperty(data, 'a', {
  get() {
    console.log('获取了a属性');
  },
  set() {
    console.log('设置了a属性');
  }
})
