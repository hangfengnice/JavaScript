// 封装获取样式的函数

function getStyle(obj, name) {
  if(window.getComputedStyle){
    return getComputedStyle(obj, null)[name]
  }else{
    return obj.currentStyle[name]
  }
}
