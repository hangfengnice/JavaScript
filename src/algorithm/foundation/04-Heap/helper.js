var swap = function (arr, l, r) {
  [arr[l], arr[r]] = [arr[r], arr[l]];
};

module.exports = {
  swap,
};
