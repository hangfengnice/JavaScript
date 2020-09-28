# 面试问题 以及相关的内容

1. 数组跟链表的区别

- 数组 内存连续
- 优点： 查找方便
- 缺点： 删除 跟 插入 性能较差
- 链表 内存不连续
- 优点： 删除 跟 插入 性能较好
- 缺点： 查找略差

浏览器 缓存

强制缓存

- cache-control

- max-age
- s-maxage
- public
- private
- no-cache
- no-store
- must-revalidate

- expires

协商缓存

last-modified

If-Modified-Since

last-modified

etag

## html

.loading {
width: 20px;
height: 20px;
border: 4px solid lightblue;
border-top-color: transparent;
border-radius: 50%;
animation: rotate 1s linear infinite;
}
@keyframes rotate {
form {
transform: rotate(0deg)
}
to {
transform: rotate(360deg)
}
}

* globalThis

* 解构赋值

题目 1
let c = [a] = [1, 2]
console.log(c, a)

题目 2
const obj1 = {}
const obj2 = {foo: 'bar'}

Object.setPrototypeOf(obj1, obj2)
const {foo} = obj1
console.log(foo)

题三

'\z' === 'z'  // true
'\172' === 'z' // true
'\x7A' === 'z' // true
'\u007A' === 'z' // true
'\u{7A}' === 'z' // true

