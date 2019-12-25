let container = document.getElementById("container");
let flag = document.getElementById("compareImg");

document.addEventListener("click", function(e) {
  console.log(container.contains(e.target));
  console.log(e.target.tagName === "IMG", e.target.tagName);

  if (container.contains(e.target) && e.target.tagName === "IMG") {
    e.target.style.border = "2px solid";
  } 
  if (e.target.compareDocumentPosition(flag) === 2) {
    e.target.style.outline = "2px solid red";
  } else if (e.target.compareDocumentPosition(flag) == 4) {
    e.target.style.outline = "2px solid green";
  } else if (e.target.compareDocumentPosition(flag) == 0) {

  } else {
    e.target.style.outline = "2px solid blue";
  }
});


var htmlIframe = '<img id="img" src="https://image.zhangxinxu.com/image/study/s/s256/mm6.jpg" onclick="console.log(this.compareDocumentPosition(window.parent.document.body))">';
var iframe = document.createElement('iframe');
var blob = new Blob([htmlIframe], { 'type': 'text/html'});
iframe.src = URL.createObjectURL(blob);
document.body.appendChild(iframe);

