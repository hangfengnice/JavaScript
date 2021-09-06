if(!Promise.prototype.finally) {
  Promise.prototype.finally = function (fn) {
    return this.then(
      function (v) {

      },
      function (e) {
        return Promise.resolve(fn()).then(function (v) {throw e})
      }
    )
  }
}