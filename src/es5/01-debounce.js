// var count = 1
// var container = document.getElementById('container')
var button = document.getElementById('btn')
// function getUserAction() {
//   container.innerHTML = count ++
// }
// // container.onmousemove = getUserAction


// // function debounce(func, wait) {
// //   var timeout
// //   return function () {
// //     console.log(arguments);
// //     clearTimeout(timeout)
// //     timeout = setTimeout(func, wait)
// //   }
// // }

// function debounce(func, wait, immediate) {
//   var timeout, result
//   var debounced = function () {
//     var args = arguments
//     var context = this
//     if(timeout) clearTimeout(timeout)
//     if (immediate) {
//       console.log(timeout);
//       var callNow = !timeout
//       timeout = setTimeout(function (){
//         timeout = null
//       }, wait )
//       if (callNow) result =  func.apply(context, args)
//     } else {
//       timeout = setTimeout(function () {
//          func.apply(context, args)
//       }, wait)
//     }
//     return result
//   }
//   debounced.cancel = function () {
//     // clearTimeout(timeout)
//     timeout = null
//   }
//   return debounced
// }
// var setUserAction = debounce(getUserAction, 10000, true)
// button.addEventListener('click', function () {
//   setUserAction.cancel()
// })
// container.onmousemove = setUserAction


var timeout
timeout = setTimeout(function () {
  console.log('hello');
}, 3000)

button.addEventListener('click', function () {
  clearTimeout(timeout)
  timeout = null
})
