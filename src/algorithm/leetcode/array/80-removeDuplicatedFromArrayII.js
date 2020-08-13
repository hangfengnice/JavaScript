function removeDuplicated(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i - 1] && arr[i] == arr[i - 2]) {
    } else {
      j++;
    }
  }
  return j;
}

let nums = [1, 1, 1, 2, 3, 3, 4];
let ret = removeDuplicated(nums);
console.log(ret);

function remElement(arr, index) {
  for (let i = index + 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  return arr;
}
function removeDuplicate(arr) {
  let i = 1,
    count = 1,
    length = arr.length;
  while (i < length) {
    if (arr[i] == arr[i - 1]) {
      count++;
      if (count > 2) {
        this.remElement(arr, i);
        i--;
        length--;
      }
    } else {
      count = 1;
    }
    i++;
  }
  return length;
}
