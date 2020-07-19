if (!Object.is || true) {
  Object.is = function ObjectIs(x, y) {
    if (x === 0) {
      return 1 / x === 1 / y;
    } else if (x !== x) {
      return y !== y;
    } else {
      return x === y;
    }
  };
}

function isValidName(name) {
  return typeof name == "string" && name.trim().length >= 3 ? true : false;
}

function hoursAttended(attended, length) {
  if (typeof attended == "string" && attended != "") {
    attended = Number(attended);
  }
  if (typeof length == "string" && length != "") {
    length = Number(legnth);
  }
  if (
    typeof attended == "number" &&
    typeof length == "number" &&
    attended <= length &&
    Number.isInteger(attended) &&
    Number.isInteger(length)
  ) {
    return true;
  }
  return false;
}

function findAll(match, arr) {
  var ret = [];
  for (let v of arr) {
    if (Object.is(match, v)) {
      ret.push(v);
    } else if (match == null && v == null) {
      ret.push(v);
    } else if (
      typeof match == "string" &&
      match.trim() != "" &&
      typeof v == "number" &&
      !Object.is(-0, v)
    ) {
      if (match == v) {
        ret.push(v);
      }
    } else if (
      typeof match == "number" &&
      !Object.is(-0, match) &&
      !Object.is(NaN, match) &&
      !Object.is(Infinity, match) &&
      !Object.is(-Infinity, match) &&
      typeof v == "string" &&
      v.trim() != ""
    ) {
      if (match == v) {
        ret.push(v);
      }
    }
  }
  return ret;
}
var getStudentById = (studentId) =>
  studentRecords.find((record) => record.id == studentId);

var printRecords = (recordIds) =>
  recordIds
    .map(getStudentById)
    .sort((a, b) => a.name - b.name)
    .forEach((record) =>
      console.log(
        `${record.name}: ${record.id} : ${record.paid ? "paid" : "not paid"}`
      )
    );

var paidStudentsToEnroll = () => [
  ...currentEnrollment,
  ...studentRecords
    .filter((record) => record.paid && !currentEnrollment.includes(record.id))
    .map((record) => record.id),
];

var remindUnpaid = (recordIds) =>
  printRecords(recordIds.filter((id) => !getStudentById(id).paid));

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
  { id: 313, name: "Frank", paid: true },
  { id: 410, name: "Suzy", paid: true },
  { id: 709, name: "Brian", paid: false },
  { id: 105, name: "Henry", paid: false },
  { id: 502, name: "Mary", paid: true },
  { id: 664, name: "Bob", paid: false },
  { id: 250, name: "Peter", paid: true },
  { id: 375, name: "Sarah", paid: true },
  { id: 867, name: "Greg", paid: false },
];

// printRecords(currentEnrollment);
// console.log("----");
// currentEnrollment = paidStudentsToEnroll();
// printRecords(currentEnrollment);
// console.log("----");
// remindUnpaid(currentEnrollment);

var method = (function defineMethod() {
  var instance = new WeakMap();
  return function method(obj, methodName, fn) {
    // console.log(this, 'outer');
    Object.defineProperty(obj, methodName, {
      get() {
        console.log(this, "innder");
        if (!instance.has(this)) {
          instance.set(this, {});
        }
        var methods = instance.get(this);
        if (!(methodName in methods)) {
          methods[methodName] = fn.bind(this);
        }
        return methods[methodName];
      },
    });
  };
})();
function bindMethods(obj) {
  for (let ownProp of Object.getOwnPropertyNames(obj)) {
    if (typeof obj[ownProp] == "function") {
      // console.log(obj[ownProp]);
      method(obj, ownProp, obj[ownProp]);
    }
  }
}
// class Workshop {
//   constructor (teacher) {
//     this.teacher = teacher
//   }
//   ask(question) {
//     console.log(this.teacher, question);
//   }
// }
// class AnotherWorkshop extends Workshop {
//   speakUp(msg) {
//     this.ask(msg)
//   }
// }
// var jsrecentparts = new AnotherWorkshop('kyle')

// bindMethods(Workshop.prototype)
// bindMethods(AnotherWorkshop.prototype)

// jsrecentparts.speakUp('hei')

function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

var deepJs = new Workshop("hf");
deepJs.ask = function (question) {
  this.__proto__.ask.call(this, question.toUpperCase());
};
deepJs.ask("what");
let obj = {
  name: "hhh",
};
let son = Object.create(obj, {
  name: {
    value: 22,
    enumerable: true,
  },
});

console.log(son);

let o2 = Object.create(obj, {
  p: {
    value: 42,
    writable: true,
    enumerable: true, // 是否显示
    configurable: true,
  },
});
