# Element 节点

## 1. 实例属性

### 1.1 元素特性的相关属性

Element.id
Element.tagName
Element.dir
Element.accessKey
Element.draggable
Element.lang
Element.tabIndex
Element.title

### 1.2 元素状态的相关属性

Element.hidden
Element.contentEditable，Element.isContentEditable
Element.attributes
Element.className，Element.classList (add, remove, contains, toggle [true, false], item, toString)
Element.dataset
Element.innerHTML
Element.outerHTML
Element.clientHeight，Element.clientWidth
Element.clientLeft，Element.clientTop
Element.scrollHeight，Element.scrollWidth
Element.scrollLeft，Element.scrollTop
Element.offsetParent
Element.offsetHeight，Element.offsetWidth
Element.offsetLeft，Element.offsetTop
Element.style
Element.children，Element.childElementCount
Element.firstElementChild，Element.lastElementChild
Element.nextElementSibling，Element.previousElementSibling

## 2. 实例方法

### 2.1 属性相关方法

getAttribute()：读取某个属性的值
getAttributeNames()：返回当前元素的所有属性名
setAttribute()：写入属性值
hasAttribute()：某个属性是否存在
hasAttributes()：当前元素是否有属性
removeAttribute()：删除属性

Element.querySelector()
Element.querySelectorAll()
Element.getElementsByClassName()
Element.getElementsByTagName()
Element.closest()
Element.matches()
事件相关方法
  Element.addEventListener()：添加事件的回调函数
  Element.removeEventListener()：移除事件监听函数
  Element.dispatchEvent()：触发事件
Element.scrollIntoView() 参数：[true, false]
Element.getBoundingClientRect()
  x：元素左上角相对于视口的横坐标
  y：元素左上角相对于视口的纵坐标
  height：元素高度
  width：元素宽度
  left：元素左上角相对于视口的横坐标，与x属性相等
  right：元素右边界相对于视口的横坐标（等于x + width）
  top：元素顶部相对于视口的纵坐标，与y属性相等
  bottom：元素底部相对于视口的纵坐标（等于y + height）
Element.getClientRects()
Element.insertAdjacentElement()
  beforebegin：当前元素之前
  afterbegin：当前元素内部的第一个子节点前面
  beforeend：当前元素内部的最后一个子节点后面
  afterend：当前元素之后
  注意，beforebegin和afterend这两个值，只在当前节点有父节点时才会生效
Element.insertAdjacentHTML()，Element.insertAdjacentText()
Element.remove()
Element.focus() 参数 {preventScroll:false}，Element.blur()
Element.click()
