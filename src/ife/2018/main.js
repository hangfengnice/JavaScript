let postfixList = [
  "163.com",
  "gmail.com",
  "126.com",
  "qq.com",
  "263.net",
];
function $(id) {
  return document.getElementById(id)
}
let input = $('email-input')
let ul = $('email-sug-wrapper')

input.addEventListener('input', function (e) {
  let val = getInputVal()
  if (!val) return clearUl()
  showTips()
})

function getInputVal() {
  return input.value.trim()
}

function tips() {
  let val = getInputVal(), prefix, suffix;
  if (val.includes('@')) {
    [prefix, suffix] = val.split('@')
  } else {
    prefix = val
  }
  let list = [...postfixList]
  if (suffix) {
    list = list.filter(item => item.includes(suffix))
    if (list.length == 0) {
      list = [...postfixList]
    }
  }
  let fragment = document.createDocumentFragment()
  for(let i = 0; i < list.length; i ++) {
    let li = document.createElement('li')
    li.textContent = prefix + '@' + list[i]
    fragment.appendChild(li)
  }
  return fragment
}
function clearUl() {
  while(ul.childNodes.length) {
    ul.removeChild(ul.firstChild)
  }
}
function showTips() {
  clearUl()
  showUl()
  ul.appendChild(tips())
}

function showUl() {
  ul.classList.add('active')
}

function hideUl() {
  ul.classList.remove('active')
}

ul.addEventListener('click', function (e) {

  if (e.target.tagName == 'LI') {
    input.value = e.target.textContent
    hideUl()
  }
})
input.addEventListener('keyup', function (e) {
  console.log(e, 'e');
})
