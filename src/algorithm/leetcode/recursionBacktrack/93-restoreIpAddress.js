// function restoreIpAddresses(s) {
//   const res = [];
//   function dfs(subRes, start) {
//     if (subRes.length == 4 && start == s.length) {
//       res.push(subRes.join("."));
//       return;
//     }
//     if (subRes.length == 4 && start < s.length) {
//       return;
//     }
//     for (let len = 1; len <= 3; len++) {
//       if (start + len > s.length) return;
//       if (len > 1 && s[start] == "0") return;
//       const str = s.substring(start, start + len);
//       if (len == 3 && +str > 255) return;
//       subRes.push(str);
//       dfs(subRes, start + len);
//       subRes.pop();
//     }
//   }
//   dfs([], 0);
//   return res;
// }

var restoreIpAddresses = function (s) {
  let ret = [],
    len = s.length;
  if (len < 4 || len > 12) return ret;
  let path = [];
  let splitTimes = 0;
  dfs(s, len, splitTimes, 0, path, ret);
  return ret;
  function dfs(s, len, split, begin, path, ret) {
    if (begin == len) {
      if (split == 4) {
        ret.push(path.join("."));
      }
      return;
    }
    if (len - begin < 4 - split || len - begin > 3 * (4 - split)) {
      return;
    }
    for (let i = 0; i < 3; i++) {
      if (begin + i >= len) break;
      let ipSegment = judgeIfIpSegment(s, begin, begin + i);
      if (ipSegment != -1) {
        path.push(ipSegment + "");
        dfs(s, len, split + 1, begin + i + 1, path, res);
        path.pop();
      }
    }
  }

  function judgeIfIpSegment(s, left, right) {
    let len = right - left + 1;

    if (len > 1 && s[left] == "0") {
      return -1;
    }
    let res = 0;
    for (let i = left; i <= right; i++) {
      res = res * 10 + +s[i];
    }
    if (res > 255) {
      return -1;
    }
    return res;
  }
};

var restoreIpAddresses = function (s) {
  let len = s.length;
  let res = [];
  if (len > 12 || len < 4) return res;
  dfs(0, 4, []);
  return res;
  function dfs(begin, residue, temp) {
    if (begin == len) {
      if (residue == 0) {
        return res.push(temp.join("."));
      }
    }
    for (let i = begin; i < begin + 3; i++) {
      if (i > len) {
        break;
      }
      if (residue * 3 < len - i) {
        continue;
      }
      if (judgeIfIpSegment(begin, i + 1)) {
        let currentIpSegment = s.substring(begin, i + 1);
        temp.push(currentIpSegment);
        dfs(i + 1, residue - 1, temp);
        temp.pop();
      }
    }
  }

  function judgeIfIpSegment(left, right) {
    let len = right - left;
    if (len > 1 && s[left] == "0") return false;
    let ret = +s.slice(left, right);
    console.log(ret, "number");
    return ret >= 0 && ret <= 255;
  }
};
