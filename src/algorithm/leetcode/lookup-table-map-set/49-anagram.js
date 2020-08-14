function groupAnagram(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let str = nums[i].split("").sort().join();
    if (map.has(str)) {
      let temp = map.get(str);
      temp.push(nums[i]);
      map.set(str, temp);
    } else {
      map.set(str, [nums[i]]);
    }
  }
  return [...map.values()];
}

function groupAnagram1(nums) {
  let res = {};
  for (let i = 0; i < nums.length; i++) {
    const str = nums[i];
    const hash = str.split("").reduce((sum, s) => {
      return (
        sum *
        [
          3,
          5,
          7,
          11,
          13,
          17,
          19,
          23,
          29,
          31,
          37,
          41,
          43,
          47,
          53,
          59,
          61,
          67,
          71,
          73,
          79,
          83,
          89,
          97,
          101,
          103,
        ][s.charCodeAt() - 97]
      );
    }, 1);
    if (res[hash]) {
      res[hash].push(str);
    } else {
      res[hash] = [str];
    }
  }
  return Object.values(res);
}

function gruopAnagram2(nums) {
  let hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    let str = nums[i],
      arr = Array(26).fill(0);
    for (let j = 0; j < str.length; j++) {
      arr[str.charCodeAt(j) - 97]++;
    }
    let hashKey = arr.join();
    if (hash.has(hashKey)) {
      let temp = hash.get(hashKey);
      temp.push(str);
      hash.set(hashKey, temp);
    } else {
      hash.set(hashKey, [str]);
    }
  }
  return [...hash.values()];
}
