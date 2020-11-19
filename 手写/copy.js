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

function deepClone (obj) {
  if (typeof obj != 'object') return obj

  let newObj = Array.isArray(obj) ? [] : {}
  for(key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] == 'object' ? deepClone(obj[key]) : obj[key]
    }
  }
  return newObj
}


