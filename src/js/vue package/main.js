let temNode = document.querySelector('#root')
console.log(temNode);
let data = {
  name: 'new name',
  message: '一个消息'
}

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
        console.log(value);
        return value
      })
      childNodes[i].nodeValue = txt

    } else if (type == 1) {
      compiler(childNodes[i], data)
    }
  }
}
let generateNode = temNode.cloneNode(true)
console.log(temNode);
compiler(generateNode, data)
console.log(generateNode);


root.parentNode.replaceChild(generateNode, root)
