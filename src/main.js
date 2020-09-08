function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}
var selectionSort = function (arr) {
  for(let i = 0; i < arr.length; i ++) {
    let minIndex = i
    for(let j = i + 1; j < arr.length; j ++) {
      if (arr[j] < arr[minIndex]) minIndex = j
    }
    swap(arr, i, minIndex)
  }
}

let arr = [1, 3, 2, 5, 4]

var SortTestHelper = function () {

}

selectionSort(arr)
console.log(arr);
