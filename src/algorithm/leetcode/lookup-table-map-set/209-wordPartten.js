function wordPattern(pattern, str) {
  var arr = str.split(" ");
  if (pattern.length != arr.length) return false;
  let map = new Map();
  let maps = new Map();

  for (let i = 0; i < pattern.length; i++) {
    if (maps.has(arr[i]) == false) {
      maps.set(arr[i], pattern[i]);
    } else {
      if (maps.get(arr[i]) != pattern[i]) {
        return false;
      }
    }

    if (map.has(pattern[i]) == false) {
      map.set(pattern[i], arr[i]);
    } else {
      if (map.get(pattern[i]) != arr[i]) {
        return false;
      }
    }
  }
  return true;
}
