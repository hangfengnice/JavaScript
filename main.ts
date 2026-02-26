class Joiner {
  join<T extends string | number>(els: T[]) {
    return els.map((el) => String(el)).join(',')
  }
}
