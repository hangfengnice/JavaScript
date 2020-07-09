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

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

// const printRecords =
try {
  var id = 1
} catch (e) {
  var id =2
}
console.log(id);
