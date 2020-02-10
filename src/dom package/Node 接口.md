# Node 接口

## 1. 属性

### 1.1 Node.prototype.nodeType

- document: 9， 对应常量 Node.DOCUMENT_NODE
- element: 1， 对应常量 Node.ELEMENT_NODE
- DocumentFragment: 11，对应常量 NODE.DOCUMENT_FRAGMENT_NODE

Node.prototype.nodeName
Node.prototype.nodeValue
Node.prototype.textContent
Node.prototype.baseURI
Node.prototype.ownerDocument
Node.prototype.nextSibling
Node.prototype.previousSibling
Node.prototype.parentNode
Node.prototype.parentElement
Node.prototype.firstChild，Node.prototype.lastChild
Node.prototype.childNodes
Node.prototype.isConnected

## 2. 方法

Node.prototype.appendChild()
Node.prototype.hasChildNodes()
Node.prototype.cloneNode()
Node.prototype.insertBefore()
Node.prototype.removeChild()
Node.prototype.replaceChild()
Node.prototype.contains()
Node.prototype.compareDocumentPosition()
Node.prototype.isEqualNode()，Node.prototype.isSameNode()
Node.prototype.normalize()
Node.prototype.getRootNode()
