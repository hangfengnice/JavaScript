let corp = {};   // 自定义一个公司对象
// 这里放一个列表用来缓存回调函数
corp.list = [];
// 去订阅事件
corp.on = function (fn) {
    // 二话不说，直接把fn先存到列表中
    this.list.push(fn);
};
// 发布事件
corp.emit = function () {
    // 当发布的时候再把列表里存的函数依次执行
    this.list.forEach(cb => {
        cb.apply(this, arguments);
    });
};
// 测试用例
corp.on(function (position, salary) {
    console.log('你的职位是：' + position);
    console.log('期望薪水：' + salary);
});
corp.on(function(skill, hobby) {
    console.log('你的技能有： ' + skill);
    console.log('爱好： ' + hobby);
});

corp.emit('前端', 10000);
corp.emit('端茶和倒水', '足球');
/*
    你的职位是：前端
    期望薪水：10000
    你的技能有： 前端
    爱好： 10000
    你的职位是：端茶和倒水
    期望薪水：足球
    你的技能有： 端茶和倒水
    爱好： 足球
*/ 


// 改写

let corp = {};
// 这次换成一个对象类型的缓存列表
corp.list = {};

corp.on = function(key, fn) {
    // 如果对象中没有对应的key值
    // 也就是说明没有订阅过
    // 那就给key创建个缓存列表
    if (!this.list[key]) {
        this.list[key] = [];
    }
    // 把函数添加到对应key的缓存列表里
    this.list[key].push(fn);
};
corp.emit = function() {
    // 第一个参数是对应的key值
    // 直接用数组的shift方法取出
    let key = [].shift.call(arguments),  // 直接修改了原数组 
        fns = this.list[key];
    // 如果缓存列表里没有函数就返回false
    if (!fns || fns.length === 0) {
        return false;
    }
    // 遍历key值对应的缓存列表
    // 依次执行函数的方法
    fns.forEach(fn => {
        fn.apply(this, arguments); // 此时的参数排除了第一个参数
    });
};

// 测试用例
corp.on('join', (position, salary) => {
    console.log('你的职位是：' + position);
    console.log('期望薪水：' + salary);
});
corp.on('other', (skill, hobby) => {
    console.log('你的技能有： ' + skill);
    console.log('爱好： ' + hobby);
});

corp.emit('join', '前端', 10000);
corp.emit('join', '后端', 10000);
corp.emit('other', '端茶和倒水', '足球');
/*
    你的职位是：前端
    期望薪水：10000
    你的职位是：后端
    期望薪水：10000
    你的技能有： 端茶和倒水
    爱好： 足球
*/

// 通用的

let event = {
  list: {},
  on(key, fn) {
      if (!this.list[key]) {
          this.list[key] = [];
      }
      this.list[key].push(fn);
  },
  emit() {
      let key = [].shift.call(arguments),
          fns = this.list[key];

      if (!fns || fns.length === 0) {
          return false;
      }
      fns.forEach(fn => {
          fn.apply(this, arguments);
      });
  },
  remove(key, fn) {
      // 这回我们加入了取消订阅的方法
      let fns = this.list[key];
      // 如果缓存列表中没有函数，返回false
      if (!fns) return false;
      // 如果没有传对应函数的话
      // 就会将key值对应缓存列表中的函数都清空掉
      if (!fn) {
          fns && (fns.length = 0);
      } else {
          // 遍历缓存列表，看看传入的fn与哪个函数相同
          // 如果相同就直接从缓存列表中删掉即可
          fns.forEach((cb, i) => {
              if (cb === fn) {
                  fns.splice(i, 1);
              }
          });
      }
  }
};

function cat() {
  console.log('一起喵喵喵');
}
function dog() {
  console.log('一起旺旺旺');
}

event.on('pet', data => {
  console.log('接收数据');
  console.log(data);
});
event.on('pet', cat);
event.on('pet', dog);
// 取消dog方法的订阅
event.remove('pet', dog);
// 发布
event.emit('pet', ['二哈', '波斯猫']);
/*
  接收数据
  [ '二哈', '波斯猫' ]
  一起喵喵喵
*/

