// // 回调函数
// var fs = require("fs");
// var path = require("path");

// function findLargest(dir, cb) {
//   fs.readdir(dir, function (err, files) {
//     if (err) return cb(err);
//     var counter = files.length;
//     var errored = false;
//     var stats = [];

//     console.log(files);
//     files.forEach(function (file, index) {
//       fs.stat(path.join(dir, file), function (er, stat) {
//         if (errored) return;
//         if (er) {
//           errored = true;
//           return cb(er);
//         }
//         stats[index] = stat;
//         if (--counter == 0) {
//           var largest = stats
//             .filter(function (stat) {
//               return stat.isFile();
//             })
//             .reduce(function (prev, next) {
//               if (prev.size > next.size) return prev;
//               return next;
//             });
//           cb(null, files[stats.indexOf(largest)]);
//         }
//       });
//     });
//   });
// }

// findLargest("./", function (err, filename) {
//   if (err) return console.error(err);
//   console.log("big file:", filename);
// });

// promise;
// var fs = require("fs");
// var path = require("path");

// var readDir = function (dir) {
//   return new Promise(function (resolve, reject) {
//     fs.readdir(dir, function (err, files) {
//       if (err) return reject(err);
//       resolve(files);
//     });
//   });
// };

// var stat = function (path) {
//   return new Promise(function (resolve, reject) {
//     fs.stat(path, function (err, stat) {
//       if (err) return reject(err);
//       resolve(stat);
//     });
//   });
// };

// function findLargest(dir) {
//   return readDir(dir)
//     .then(function (files) {
//       let promises = files.map((file) => stat(path.join(dir, file)));
//       return Promise.all(promises).then(function (stats) {
//         return { stats, files };
//       });
//     })
//     .then(function (data) {
//       let largest = data.stats
//         .filter(function (stat) {
//           return stat.isFile();
//         })
//         .reduce(function (prev, next) {
//           if (prev.size > next.size) return prev;
//           return next;
//         });

//       return data.files[data.stats.indexOf(largest)];
//     });
// }
// findLargest("./")
//   .then(function (file) {
//     console.log(file);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// generator;
// var fs = require("fs");
// var path = require("path");
// var co = require("co");

// var readDir = function (dir) {
//   return new Promise(function (resolve, reject) {
//     fs.readdir(dir, function (err, files) {
//       if (err) return reject(err);
//       resolve(files);
//     });
//   });
// };

// var stat = function (path) {
//   return new Promise(function (resolve, reject) {
//     fs.stat(path, function (err, stats) {
//       if (err) return reject(err);
//       resolve(stats);
//     });
//   });
// };

// function* findLargest(dir) {
//   var files = yield readDir(dir);
//   var stats = yield files.map(function (file) {
//     return stat(path.join(dir, file));
//   });
//   let largest = stats
//     .filter((stat) => stat.isFile())
//     .reduce((prev, next) => {
//       if (prev.size > next.size) return prev;
//       return next;
//     });
//   return files[stats.indexOf(largest)];
// }
// co(findLargest, "./")
//   .then((filename) => console.log(filename))
//   .catch((err) => console.log(err));

// async

var fs = require("fs");
var path = require("path");
var readDir = function (dir) {
  return new Promise(function (resolve, reject) {
    fs.readdir(dir, function (err, files) {
      if (err) return reject(err);
      resolve(files);
    });
  });
};
var stat = function (path) {
  return new Promise(function (resolve, reject) {
    fs.stat(path, (err, stats) => {
      if (err) return reject(err);
      resolve(stats);
    });
  });
};
async function findLargest(dir) {
  var files = await readDir(dir);
  let promises = files.map((file) => stat(path.join(dir, file)));
  var stats = await Promise.all(promises);
  let largest = stats
    .filter((stat) => stat.isFile())
    .reduce((prev, next) => {
      if (prev.size > next.size) return prev;
      return next;
    });
  return files[stats.indexOf(largest)];
}
findLargest("./")
  .then((file) => console.log(file))
  .catch((err) => console.log(err));
