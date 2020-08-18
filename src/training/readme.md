# some kills

- map

```js
codewars 7ku Running out of space

Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing. For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace'].

function spacey(array) {
  let s = "";
  return array.map((a) => (s += a));
}
```

```js
7ku Find the stray number


function stray(numbers){
  for (var i in numbers){
     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
  }
}

const stray = nums => nums.reduce((a, b) => a ^ b);


function stray(numbers) {
  var a = numbers.sort();

  if(a[0] != a[1]) {
    return a[0]
  }
  return a[a.length-1]
}
```
