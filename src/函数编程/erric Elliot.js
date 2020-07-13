const t = value => {
  const add = n => t(value + n)
  return Object.assign(add, {
    toString() {
      return `t(${value})`
    },
    valueOf() {
      return value
    }
  })
}

const assert = {
  same: (actual, expected, msg) => {
    if (actual.toString() !== expected.toString()) {
      throw new Error(`not ok; ${ msg }
      Expected: ${ expected }
      Actual:   ${ actual }`)
    }
    console.log(`ok: ${msg}`);
  }
}
{
  const msg = 'a value t(x) composed with t(0) ==== t(x)'
  const x = 20
  const a = t(x)(t(0))
  const b = t(x)
  // assert.same(a, b, msg)

}

console.log(Array.of(2));
