var fs = require('fs')
var path = require('path')
// function findLargest(dir, cb) {
//   fs.readdir(dir, function (er, files) {
//     if (er) cb(er)
//     var counter = files.length
//     var errored = false
//     var stats = []

//     files.forEach(function (file, index) {
//       fs.stat(path.join(dir, file), function (er, stat) {
//         if (errored) return
//         if (er) {
//           errored = true
//           return cb(er)
//         }
//         stats[index] = stat
//         if ( -- counter == 0) {
//           var largest = stats.filter(function (stat){return stat.isFile()})
//           .reduce(function (prev, next) {
//             if (prev.size > next.size) return prev
//             return next
//           })
//           cb(null, files[stats.indexOf(largest)])
//         }

//       })
//     })

//   })
// }
// findLargest('./', function (er, filename) {
//   if (er) return console.error(er)
//   console.log('largest file was:', filename);
// })

// promise

var readDir = function (dir) {
  return new Promise(function (resolve, reject) {
    fs.readdir(dir, function (err, files) {
      if (err) reject(err)
      resolve(files)
    })
  })
}
var stat = function (path) {
  return new Promise(function (resolve, reject) {
    fs.stat(path, function (err, stat) {
      if (err) reject(err)
      resolve(stat)
    })
  })
}

function findLargest(dir) {
  return readDir(dir).then(function (files) {
    console.log(files);
    let promises = files.map(file => stat(path.join(dir, file)))
    return Promise.all(promises).then(function (stats) {
      return {stats, file}
    })
  }).then(data => {
    let largest = data.stats.filter(function (stat) {return stat.isFile()}).reduce(function(prev, next) {
      if (prev.size > next.size) return prev
      return next
    })
    return data.files[data.stats.indexOf(largest)]
  })
}

// findLargest('./')

//
function timeoutPromise(delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      reject('timeout')
    }, delay);
  })
}

function red() {
  console.log('red');
}
function green() {
  console.log('green');
}
function yellow() {
  console.log('yellow');
}
var light = function (timmer, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      cb()
      resolve()
    }, timmer)
  })
}

var step = function () {
  Promise.resolve().then(() => {
    return light(500, green)
  }).then(() => {
    return light(500, red)
  }).then(() => {
    return light(500, yellow)
  }).then(() => {
    step()
  })
}
step()
