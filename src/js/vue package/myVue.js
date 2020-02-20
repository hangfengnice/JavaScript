let rkuohao = /\{\{(.+?)}}/g

function compiler(template, data) {
  let childNodes = template.childNodes
  for (let i = 0; i < childNodes.length; i ++) {
    let type = childNodes[i].nodeType
    if (type == 3) {
      let txt = childNodes[i].nodeValue
      txt = txt.replace(rkuohao, function (m, $1) {
        let key = $1.trim()
        let value = data[key]
        return value
      })
      childNodes[i].nodeValue = txt

    } else if (type == 1) {
      compiler(childNodes[i], data)
    }
  }
}
function myVue(options) {
  this._data = options.data
  this._el = options.el

  this.$el = this._templateDOM = document.querySelector(this._el)
  this._parent = this._templateDOM.parentNode

  this.render()
}
myVue.prototype.render = function () {
  this.compiler()
}
myVue.prototype.compiler = function (tempNode) {
  let realHTMLDOM = this._templateDOM.cloneNode(true)
  compiler(realHTMLDOM, this._data)
  this.update(realHTMLDOM)

}
myVue.prototype.update = function (real) {
  this._parent.replaceChild(real, document.querySelector('#root'))
}

let app = new myVue({
  el: '#root',
  data: {
    name: 'helo',
    message: 'hangfeng'
  }
})
