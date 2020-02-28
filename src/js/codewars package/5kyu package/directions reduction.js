function dirReduc(plan) {
  var opposite = {
    'NORTH': "SOUTH",
    "EAST": "WEST",
    "WEST": "EAST",
    "SOUTH": "NORTH"
  }
  return plan.ruduce((dirs, dir) => {
    if (dirs[dirs.length - 1] == opposite[dir]) {
      dirs.pop()
    } else {
      dirs.push(dir)
    }
    return dirs
  }, [])
}

// regexp
function dirReduc(arr) {
  var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|WESTEAST|SOUTHNORTH/g
  while(pattern.test(str)) str.replace(pattern, '')
  return str.match(/NORTH|SOUTH|EAST|WEST/g) || []
}
// mine
// var newArr = []
//   for (var i = 0; i < arr.length; i ++) {
//     switch(arr[i]) {
//       case 'NORTH':
//         if (newArr[newArr.length - 1] == 'SOUTH') newArr.pop()
//         else newArr.push(arr[i])
//         break;
//       case 'SOUTH':
//         if (newArr[newArr.length - 1] == 'NORTH') newArr.pop()
//         else newArr.push(arr[i])
//         break;
//       case 'EAST':
//         if (newArr[newArr.length - 1] == 'WEST') newArr.pop()
//         else newArr.push(arr[i])
//         break;
//       case 'WEST':
//         if (newArr[newArr.length - 1] == 'EAST') newArr.pop()
//         else newArr.push(arr[i])
//         break;
//     }
//   }
//   return newArr
