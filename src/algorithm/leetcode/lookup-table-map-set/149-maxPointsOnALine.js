function maxPoints(points) {
  if (points.length < 3) return points.length
  let map = new Map(), gradient = 0, ans = 0, count, same;
  for(let i = 0; i < points.length - 1; i ++) {
    count = 0
    same = 0
    for(let j = i + 1; j < points.length; j ++) {
      let [[x1, y1], [x2, y2]] = [points[i], points[j]]
      let dx = x1 - x2, dy = y1 - y2
      const g = gcd(dx, dy)
      if (g != 0) {
        dx /= g
        dy /= g
      }
      if (dy === 0 && dx === 0) {
        same ++
      } else {
        if (dx === 0) {
          gradient = Infinity
        } else {
          if (dy ==0) dx = 1
          gradient = `${dx},${dy}`
        }

        let temp = map.get(gradient)
        if (temp == undefined) {
          temp = 2
        } else {
          temp += 1
        }
        map.set(gradient, temp)
        if (temp > count) {
          count = temp
        }
      }
    }
    if (count == 0) {
      ans = Math.max(ans, same + 1)
    } else {
      ans = Math.max(ans, same + count)
    }
    map = new Map()
  }
  return ans

  function gcd(a, b) {
    if (b === 0) return a
    return gcd(b, a % b)
  }
}

let ret = maxPoints([[0,0],[94911150,94911151],[94911151,94911152]])
console.log(ret);
