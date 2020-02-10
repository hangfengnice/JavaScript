# css 操作

## 1. HTML 元素的 style 属性

## 2. CSSStyleDeclaration 接口

CSS.escape()
document.querySelector('#foo#bar')，只能写成document.querySelector('#foo\\#bar')
document.querySelector('#' + CSS.escape('foo#bar'))

window.getComputedStyle()
  getComputedStyle方法还可以接受第二个参数，表示当前元素的伪元素（比如:before、:after、:first-line、:first-letter等）

## StyleSheet 接口

StyleSheet.disabled
Stylesheet.href
StyleSheet.media
StyleSheet.title
StyleSheet.type
StyleSheet.parentStyleSheet
StyleSheet.ownerNode
CSSStyleSheet.cssRules
CSSStyleSheet.ownerRule