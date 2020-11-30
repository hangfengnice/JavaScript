const SIZE = 256

function generateBadChar(b, m, badChar) {
  let i, ascii
  for( i = 0; i < SIZE; i ++) {
    badChar[i] = -1
  }
  for( i = 0; i < m; i ++) {
    ascii = b[i].codePointAt()
    badChar[ascii]
  }
}

function generateGS(b, m, suffix, prefix) {
  let i, j, k
  for(i = 0; i < m; i ++) {
    suffix[i] = -1
    prefix[i] = false
  }
  for(i = 0; i < m - 1; i ++) {
    j = i
    k = 0
    while(j >= 0 && b[j] == b[m - 1 - k]) {
      --j
      ++k
      suffix[k] = j + 1
    }
    if (j == -1) {
      prefix[k] = true
    }
  } 
}

function moveByGS(j, m, suffix, prefix) {
  let k = m - 1 - j
  if (suffix[k] != -1) {
    return j - suffix[k] + 1
  }
  for(let r = j + 2; r < m; r ++) {
    if (prefix[m - r] == true) {
      return r
    }
  }
  return m
}

function bm(a, n, b, m) {
  let badchar = Array(SIZE)
  generateBadChar(b, m, badchar)

  let suffix = []
  let prefix = []

  generateGS(b, m, suffix, prefix)

  console.log(suffix, prefix);

  let i = 0, j , moveLen1, moveLen2

  while(i < n - m + 1) {
    for(j = m - 1; j >= 0; j --) {
      if (a[i + j] != b[j]) break
    }
    if (j < 0) {
      return i
    }
    moveLen1 = j - badchar[a[i + j].codePointAt()]
    moveLen2 = 0
    if (j < m - 1) {
      moveLen2 = moveByGS(j, m, suffix, prefix)
    }
    i = i + Math.max(moveLen1, moveLen2)
  }
  return -1
}

let res = bm('acaca', 4, 'ca', 2)
console.log(res);