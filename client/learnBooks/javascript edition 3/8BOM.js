var age = 18
window.color = 'red'
delete window.age
delete window.color
console.log(window.age, window.color)

// screenLeft screenTop
// console.log(window.screenLeft, window.screenTop)
// console.log(innerWidth, outerWidth, innerHeight, outerHeight)
console.log(document.documentElement.clientWidth, document.documentElement.clientHeight)
console.log(
  document.body.clientWidth,
  document.body.clientHeight  // 0
);

// window.open('http://www.wrox.com/', 'wroxWindow')

// setTimeout

// setTimeout('console.log("hello")', 100)

// if(confirm("are you sure?")){
//   console.log("good")
// } else {
//   console.log("bad")
// }
// let name = prompt('your name', 'hangfeng')
// console.log(name)
// if( name !== null){
//   console.log("hello " + name)
// } else {
//   console.log("no name")
// }

// console.log(window.location == document.location)

// location

var url = document.createElement('a');
url.href = 'https://developer.mozilla.org/en-US/search?q=URL#search-results-close-container';
console.log(url.href);      // https://developer.mozilla.org/en-US/search?q=URL#search-results-close-container
console.log(url.protocol);  // https:
console.log(url.host);      // developer.mozilla.org
console.log(url.hostname);  // developer.mozilla.org
console.log(url.port);      // (blank - https assumes port 443)
console.log(url.pathname);  // /en-US/search
console.log(url.search);    // ?q=URL
console.log(url.hash);      // #search-results-close-container
console.log(url.origin);    // https://developer.mozilla.org

console.log(navigator.plugins)


console.log(window.history)
console.log(confirm('hangfeng'))




