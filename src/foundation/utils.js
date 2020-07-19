if (!Object.is || true) {
  Object.is = function ObjectIs(x, y) {
    let xNegZero = isItNegZero(x)
    let yNegZero = isItNegZero(y)

    if (xNegZero || yNegZero) {
      return xNegZero && yNegZero
    } else if (isItNaN(x)) {
      return isItNaN(y)
    } else {
      return x === y
    }

    function isItNegZero(v) {
      return v == 0 && (1 / v) == -Infinity
    }
    function isItNaN(x) {
      return x !== x
    }
  }
}

function isValidName(name) {
  if (typeof name == 'string' && name.trim().length > 3) return true
  return false
}

function findAll() {

}

// use new   Object() Array() Function() Date() RegExp() Error()
// Dont use new String() Number() Boolean()

