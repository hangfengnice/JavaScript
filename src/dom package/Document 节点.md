# Document 节点

## 1. 概述

## 2. 属性

### 2.1. 快捷方式属性

document.defaultView
document.doctype
document.documentElement
document.body，document.head
document.scrollingElement
document.activeElement
document.fullscreenElement

### 2.2 节点集合属性

document.links
document.forms
document.images
document.embeds，document.plugins
document.scripts
document.styleSheets

* 除了document.styleSheets，以上的集合属性返回的都是HTMLCollection实例

### 2.3 文档静态信息属性

document.documentURI，document.URL
document.domain
document.location
document.lastModified
document.title
document.characterSet
document.referrer
document.dir
document.compatMode

### 2.4 文档状态属性

document.hidden
document.visibilityState (visible, hidden, prerender, unloaded)
document.readyState (loading, interactive, complete)

### 2.5 document.cookie

### 2.6 document.designMode

### 2.7 implementation

DOMImplementation.createDocument()：创建一个 XML 文档。
DOMImplementation.createHTMLDocument()：创建一个 HTML 文档。
DOMImplementation.createDocumentType()：创建一个 DocumentType 对象。

## 方法

document.open()，document.close()
document.write()，document.writeln()
document.querySelector()，document.querySelectorAll()
document.getElementsByTagName()
document.getElementsByClassName()
document.getElementsByName()
document.getElementById()
document.elementFromPoint()，document.elementsFromPoint()
document.createElement()
document.createTextNode()
document.createAttribute()
document.createComment()
document.createDocumentFragment()
document.createEvent()
document.addEventListener()，document.removeEventListener()，document.dispatchEvent()
document.hasFocus()
document.adoptNode()，document.importNode()
document.createNodeIterator()
document.createTreeWalker()
document.execCommand()，document.queryCommandSupported()，document.queryCommandEnabled()
document.getSelection()
