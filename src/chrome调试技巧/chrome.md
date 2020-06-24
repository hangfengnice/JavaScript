# chrome

## 通用篇

* copy()
* store as global
* stack trace (save as...)
* 直接copyHTML (command + c)
  
### 快捷键和通用技巧

* 切换 devtools 窗口的布局展示 (command + shift + D)
* 切换 devtools 的面板 (control + [ 和 control + ])
* 递增/递减
  * 1
  * 10 (shift + )
  * 100 (command + shift + )
  * 0.1 (option + )
* 元素的查找 elements logs sources network (command + F)

### 使用 commond 显示隐藏的菜单 (command + shift + P)

* 屏幕截图 全屏 (command + shift + P => screen => capture full size screenshot) 当前显示 (capture screenshot)
* layout
* 切换主题 (theme)
  
### 代码块的使用

* source => snippets => () (command + enter 或者 右键点击run) 快速运行 (command + P => ! => enter)

## console

### console 中的$

* $0 ~ $4 当前选中的节点 当前的当前
* $ 和 $$
  * $ 相当于 document.querySelector()
  * $$ 相当于 document.querySelectorAll() 变成 数组
* $i 安装插件

### console 的 ‘bug’

* 对象的引用问题

### console 的异步

* await

### 对象&方法

* queryObjects
* monitor
* monitorEvents

### console 中的骚操作

* console.assert()
* console.table() 第二个参数(显示谁) 可以排序
* console.dir
* logs show timestamps(显示时间)
* console.time() console.timeEnd()
* css 样式 console.log() %c, 第二个参数是css
* 直接在回调中传入 console.log

## network

* 重新发送 XHR

## 元素面板篇

* 通过 ‘h' 来隐藏元素
* 拖动元素
* 移动元素 (command + up / down)
* 撤销步骤 (command + Z)
* shadow editor
* timing function editor
* 插入样式规则的按钮 右下方
* 展开所有子节点 expand recursively
* dom 断点

## 颜色选择器

* color

## drawer

* 打开 drawer ESC 显示 和 隐藏
* changes
