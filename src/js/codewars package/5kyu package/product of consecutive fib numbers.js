function productFib(prod) {
  var n = 0, nplus = 1
  while(prod > n * nplus) {
    nplus = n + nplus
    n = nplus - n
  }
  return [n, nplus, n * nplus == prod]
}
