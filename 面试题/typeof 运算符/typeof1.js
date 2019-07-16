// console.log(
//   typeof undefined,
//   typeof "abc",
//   typeof 123,
//   typeof true,
//   typeof {},
//   typeof [],
//   typeof null,
//   typeof console.log
// );
// // undefined string number boolean object object object function


// var arr = [1,2]

// console.log(arr.indexOf(10))

// var arr = [1,4,5,6]
// var result = arr.filter((item) => {
//   return item > 4
// })
// console.log(result)
// console.log(arr)
 
// var dt = new Date()

// console.log(Math.PI)

// function formatDate(dt){
//   if(!dt){
//     dt = new Date()
//   }
//   var year = dt.getFullYear()
//   var month = dt.getMonth() + 1
//   var date = dt.getDate()
//   month = month >= 10 ? month : "0" + month
//   date = date >= 10 ? date : '0' + date

//   return year + "-" + month + "-" + date

// }

// console.log(formatDate(new Date()))


// var random = Math.random()

// console.log(random)
function forEach(obj,fn){
   var key
   if(obj instanceof Array){
     obj.forEach(function(item,index){
       fn(index,item)
     })
   }else{
     for(key in obj ){
       if(obj.hasOwnProperty(key)){
         fn(key, obj[key])
       }
     }
   }
}

var arr = [1,2,3]
forEach(arr, function(item,index){
  console.log(item,index)
})

var obj = {x: 100, y : 100}

forEach(obj, function(key,val){
   console.log(key,val)
})