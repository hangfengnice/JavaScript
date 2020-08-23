// 6ku Build a pile of Cubes
function findNb(m) {
  let n = 0
  let sum = 0
  while(sum < m) {
    n ++
    sum += Math.pow(n, 3)
  }
  return sum == m ? n : -1
}

function findNb(m) {
  let n = 0
  while(m > 0) m -= ++n ** 3
  return m ? -1 : n
}
