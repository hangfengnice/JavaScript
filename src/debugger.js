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
        .reduce(function (as, bs) {
          let ret = as.reduce(
            (arr, a) => arr.concat(bs.map((b) => `${a}${b}`)),
            []
          );
          console.log(ret);
          return ret;
        });
};

letterCombinations("234");







