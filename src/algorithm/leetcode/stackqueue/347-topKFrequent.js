function kFrequent(nums, k) {
  let map = {};
  nums.forEach((item) => (map[item] ? map[item]++ : (map[item] = 1)));
  return Object.keys(map)
    .sort((a, b) => map[b] - map[a])
    .slice(0, k)
    .map((item) => +item);
}


var topKFrequent = function (nums, k) {
  let map = new Map(), head = [,]
  nums.map((num) => {
    if (map.has(num)) map.set(num, map.get(num) + 1)
    else map.set(num, 1)
  })
  if(map.size <= k) {
    return [...map.keys()]
  }
  let i = 0

  map.forEach((value, key) => {
    if (i < k) {
      heap.push(key)
      if (i === k - 1) buildHeap(heap, map, k)
    } else if (map.get(heap[1]) < value) {
      heap[1] = key
      heapify(heap, map, k, 1)
    }
    i ++
  })

}
