// recursion 递归
const first = (xs) => xs[0];
const rest = (xs) => xs.slice(1);

let arr = [1, 2, 3, 4, 5];
// sum
const sum = (xs) => (xs.length == 0 ? 0 : first(xs) + sum(rest(xs)));
// reverse
const reverse = xs => xs.length == 0 ? [] : reverse(rest(xs)).concat(first(xs))
// tail recursive sum
const sumTail = list => {
  const go = (acc, xs) => xs.length == 0 ? acc : go(acc + first(xs), rest(xs))
  return go(0, list)
}
// reduce
const reduce = (f, acc, xs) => xs.length == 0 ? acc : reduce(f, f(acc, first(xs)), rest(xs))
// reduce
// const reduce = function (reduceFn, accumulator, iterable) {
//   for (let i of iterable) {
//     // console.log(i);
//     accumulator = reduceFn(accumulator, i)
//     // console.log(accumulator);
//   }
//   return accumulator
// }

// higher-order functions
// const sum1 = xs => reduce((acc, x) => acc + x, 0, xs)
// const reverse1 = xs => reduce((acc, x) => x.concat(acc), [], xs)
// let ret = sum1(arr)
// let ret1 = reverse1(arr)
// console.log(ret);
// console.log(ret1);
// const all = xs => reduce((acc, x) => acc && x, true, xs)
// const any = xs => reduce((acc, x) => acc || x, true, xs)
// console.log(all([1, 0, 2, 3, 4]));
// console.log(any([1, 0, 2, 3, 4]));

// const unfold = (f, seed) => {
//   const go = (f, seed, acc) => {
//     const res = f(seed)
//     return res ? go(f, res[1], acc.concat([res[0]])) : acc
//   }
//   return go(f, seed, [])
// }

// let ret = unfold(x => x < 26 ? [String.fromCharCode(x + 65), x + 1] : null, 0)
// console.log(ret);

// const Nil = {}
// const _Cons = function (h, tl) {
//   this.head = h
//   this.tail = tl
// }
// const Cons = (h, tl) => new _Cons(h, tl)
// const fold = (f, acc, xs) => xs.head ? fold(f, f(acc, xs.head), xs.tail) : acc
// const lst = Cons(3, Cons(4, Cons(5, Nil)))
// let ret = fold((acc, x) => acc + x, 0, lst)
// console.log(ret);

const Empty = {}
const _Leaf = function (x) {this.x = x}
const Leaf = x => new _Leaf(x)
const _Node = function (l, x, r) {
  this.left = l
  this.x = x
  this.right = r
}
const Node = (l, x, r) =>  new _Node(l, x, r)
const tree = Node(Node(Leaf(2), 1, Leaf(3)), 0, Leaf(4))
const fold = (f, acc, xs) => {
  if (xs instanceof _Node) {
    return fold(f, acc, xs.left) + fold(f, xs.x, xs.x) + fold(f, acc, xs.right)
  } else if (xs instanceof _Leaf) {
    return acc + xs.x
  } else {
    return acc
  }
}
let ret = fold((acc,x) => acc + x, 0, tree)

// console.log(ret);
// console.log(tree instanceof _Node);

const concat = (a, b) => a.concat(b)
// map
const mapper = (f, cnct) => (acc, x) => cnct(acc, f(x))
let ret1 = reduce(mapper(x => x + 1, concat), [], [1, 2, 3])

const filter = (f, cnct) => (acc,x) => f(x) ? cnct(acc, x) : acc
console.log(ret1);
// let ret2 = reduce(filter(x => x > ))
