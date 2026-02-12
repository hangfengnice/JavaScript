# JavaScript 手写实现合集

前端常见手写题 / Polyfills 实现

## 📋 目录

### 基础 API
- [01_call.js](01_call.js) - 手写 Function.prototype.call
- [02_apply.js](02_apply.js) - 手写 Function.prototype.apply
- [03_bind.js](03_bind.js) - 手写 Function.prototype.bind
- [04_new.js](04_new.js) - 手写 new 操作符

### 性能优化
- [05_debounce.js](05_debounce.js) - 防抖函数
- [06_throttle.js](06_throttle.js) - 节流函数

### 工具函数
- [07_getType.js](07_getType.js) - 精确类型判断
- [08_deepClone.js](08_deepClone.js) - 深拷贝
- [10_flatten.js](10_flatten.js) - 数组扁平化
- [11_parseQueryParams.js](11_parseQueryParams.js) - URL 参数解析

### 设计模式
- [09_eventBus.js](09_eventBus.js) - 事件总线
- [eventEmitter/](eventEmitter/) - EventEmitter 发布订阅

### 异步编程
- [12_promise.js](12_promise.js) - 手写 Promise
- [13_lazyMan.js](13_lazyMan.js) - LazyMan 链式调用

### 函数式编程
- [14_curry.js](14_curry.js) - 函数柯里化
- [15_compose.js](15_compose.js) - 函数组合

### 数据结构
- [16_LRUCache.js](16_LRUCache.js) - LRU 缓存实现

## 💡 使用方式

每个文件都是独立的实现，可直接在 Node.js 或浏览器中运行：

```bash
node 01_call.js
```

或在浏览器控制台中复制代码运行。
