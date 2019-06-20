# javascript

## 零散知识点

- 数据类型

```javascript
    null undefined 不能使用toString()

    两个字符串比较时 比较Unicode编码

    console.log(null == 0) //false
    console.log(null == undefined) // true

    prompt() 用户输入

    typeof null // object
```

- 测试代码运行时间 console.time('名称') console.timeEnd('名称')

- Math.sqrt() 开方

### dom

- dom相关

```javascript
var body = documnet.body;
var html = document.documentElement;
var all = document.all; // document.all代表页面中的所有元素
var all = document.getElementsByTagName("*") // 与上面的效果一样

window.confirm()

// 滚动条

scrollHeight - scrollTop == clientHeight // 表示滚动条到底了
```
