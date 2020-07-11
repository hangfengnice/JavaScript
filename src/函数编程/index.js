var someAPI = {

}
var obj = {
  name: 'hf',
  wife: {
    name: 'yy'
  }
}

let {
  wife,
  wife: {
  name
}} = obj

console.log(wife, name);

console.log([1, 2, 3].findIndex(x => x > 4));

console.log([1, 2, [2]].flatMap(item => [[item]]));

var numbers = {
  *[Symbol.iterator]({
    start,
    end,
    step
  }) {
    for( let i = start; i < end; i += step) {
      yield i
    }
  }
}

console.log(`num ${[...numbers[Symbol.iterator]({start: 0, end: 100, step: 5})]}`);
