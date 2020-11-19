var arr = [
  function () {
    console.log(a);
  },
  {
    b: function () {
      console.log(b);
    },
  },
];

let newArr = JSON.parse(JSON.stringify(arr))

console.log(newArr);
