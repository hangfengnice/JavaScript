Array.prototype.mySplice = function (startIndex, deleteCount, ...addElements) {
  let argumentsLen = arguments.length
  let array = Object(this)

  let len = array.length
  let deleteArr = new Array(deleteCount)

  sliceDeleteElements(array, startIndex, deleteCount, deleteArr)

  movePostElements(array, startIndex, len, deleteCount, addElements)

  for(let i = 0; i < addElements.length; i ++) {
    array[startIndex ++] = addElements[i]
  }

  array.length = len - deleteCount + addElements.length
  return deleteArr
}

function sliceDeleteElements(array, startIndex, deleteCount, deleteArr) {
  for(let i = 0; i < deleteCount; i ++) {
    let index = startIndex + i
    if (index in array) {
      deleteArr[i] = array[index]
    }
  }
}

// [1, 2 , 3].splice(0, 2, 6)

function movePostElements(array, startIndex, len, deleteCount, addElements) {
  if (deleteCount == addElements.length) return 

  if (deleteCount > addElements.length) {
    for(let i = startIndex + deleteCount; i < len; i ++) {
      let fromIndex = i
      let toIndex = i - (deleteCount - addElements.length)

      if (fromIndex in array) {
        array[toIndex] = array[fromIndex]
      } else {
        delete array[toIndex]
      }
    }
  }
}