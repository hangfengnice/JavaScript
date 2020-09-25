var letterCombinations = function (digits) {
  var phone = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  var output = [];
  function backtrack(combination, nextdigit) {
    if (nextdigit.length == 0) {
      output.push(combination);
    } else {
      for (let letter of phone[nextdigit[0]]) {
        backtrack(combination + letter, nextdigit.slice(1));
      }
    }
  }
  if (digits) {
    backtrack("", digits);
  }
  return output;
};

var letterCombinations = function (digits) {
  const CHAR_MAP = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ].map((s) => s.split(""));
  return digits.length === 0
    ? []
    : digits
        .split("")
        .map((d) => CHAR_MAP[d])
        .reduce((as, bs) =>
          as.reduce((arr, a) => arr.concat(bs.map((b) => `${a}${b}`)), [])
        );
};

let ret = letterCombinations("23", [
  "ad",
  "ae",
  "af",
  "bd",
  "be",
  "bf",
  "cd",
  "ce",
  "cf",
]);
console.log(ret);
