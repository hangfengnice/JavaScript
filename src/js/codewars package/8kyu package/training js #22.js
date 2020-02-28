function shuffleIt(arr, ...args) {
  for([a, b] of args) [arr[a], arr[b]] = [arr[b], arr[a]]
  return arr
}
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 3]));
