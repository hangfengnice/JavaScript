var twoSum = function (numbers, target) {
  let l = 0,
    r = numbers.length - 1;
  while (l < r) {
    let left = numbers[l];
    let right = numbers[r];
    if (left + right == target) {
      return [l + 1, r + 1];
    } else if (left + right < target) {
      l++;
    } else {
      r--;
    }
  }
};

var twoSum1 = function (numbers, target) {
  for(let i = 0; i < numbers.length; i ++) {
    let low = i + 1, high = numbers.length - 1
    while(low <= high) {
      let mid = ~~((high - low) / 2) + low
      if (numbers[mid] = target - numbers[i]) {
        return [i + 1, mid + 1]
      } else if (numbers[mid] > target - numbers[i]) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
  }
}

let res = twoSum1([2, 7, 89], 9);
console.log(res);
