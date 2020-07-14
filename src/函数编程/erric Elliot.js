const view = (lens, store) => lens.view(store)
const set = (lens, value, store) => lens.set(value, store)

const lensProp = prop => ({
  view: store => store[prop],
  set: (value, store) => ({
    ...store,
    [prop]: value
  })
})

const fooStore = {
  a: 'foo',
  b: 'bar'
}

const aLens = lensProp('a')
const bLens = lensProp('b')

const a = view(aLens, fooStore)
const b = view(bLens, fooStore)

// const bazStore = set(aLens, 'baz', fooStore)

// console.log(bazStore);

// console.log(a, b);

const store = fooStore
{
  const lens = lensProp('a')
  console.log(lens)
  const value = 'baz'
  const a = value

  const b = view(lens, set(lens, value, store))
  console.log(a, b);
}
