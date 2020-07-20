const {
  toUpper,
  concat,
  prop,
  match,
  add,
  compose,
  map,
  curry
} = require('ramda')
const moment = require('moment')

var Container = function (x) {
  this.__value = x
}
Container.of = function (x) {
  return new Container(x)
}
Container.prototype.map = function (f) {
  return new Container(f(this.__value))
}

var Maybe = function (x) {
  this.__value = x
}
Maybe.of = function (x) {
  return new Maybe(x)
}
Maybe.prototype.isNothing = function () {
  return this.__value == null
}
Maybe.prototype.map = function (f) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value))
}
var safeHead = function(xs) {
  return Maybe.of(xs[0]);
};

// var withdraw = curry(function(amount, account) {
//   return account.balance >= amount ?
//     Maybe.of({balance: account.balance - amount}) :
//     Maybe.of(null);
// });
// var maybe = curry(function(x, f, m) {
//   return m.isNothing() ? x : f(m.__value);
// });

var Left = function (x) {
  this.__value = x
}
Left.of = function (x) {
  return new Left(x)
}
Left.prototype.map = function () {
  return this
}

var Right = function (x) {
  this.__value = x
}
Right.of = function(x) {
  return new Right(x)
}
Right.prototype.map = function (f) {
  return new Right(f(this.__value))
}
var getAge = curry(function(now, user) {
  var birthdate = moment(user.birthdate, 'YYYY-MM-DD');
  if(!birthdate.isValid()) return Left.of("Birth date could not be parsed");
  return Right.of(now.diff(birthdate, 'years'));
});

var fortune = compose(concat("If you survive, you will be "), String)
var zoltar = compose(map(console.log), map(fortune), getAge(moment()));

var either = curry(function(f, g, e) {
  switch(e.constructor) {
    case Left: return f(e.__value);
    case Right: return g(e.__value);
  }
});
function id (x) {
  return x
}
var zoltar = compose(console.log, either(id, fortune), getAge(moment()));

var IO = function (f) {
  this.__value = f
}

IO.of = function (x) {

}

let ret = zoltar({birthdate: 'balloons!'});;
console.log(ret);

