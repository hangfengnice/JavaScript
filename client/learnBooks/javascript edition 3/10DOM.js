let myList = document.querySelector('ul')
let deepList = myList.cloneNode(true)
console.log(deepList.childNodes.length)
let deepList1 = myList.cloneNode();
console.log(deepList1.nodeValue, deepList1.ownerDocument)
console.log(deepList1, deepList1.childNodes.length);
console.log(document.links)

// window.onload = () => document.write("hello");
