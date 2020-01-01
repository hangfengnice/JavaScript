// 1. 获取 cookie
console.log(document.cookie);

// 2. 种 cookie
document.cookie = "usrid=1"

// 3. 设置过期时间
document.cookie = 'usrid=1' + 'max-age=' + (time + 60 * 60 * 24)
var expires = 24 * 36e5;  // 过期时间：1 天
document.cookie = 'userid=1; expires=' + (new Date((+new Date(time)) + expires)).toUTCString();
// 简单
document.cookie ='userid=1; max-age=86400'

// 4. 获取 cookie

function getCookie(name) {
  let cookieStr = document.cookie;
  let cookieList= cookieStr.split(";");
  for(let i=0;i<cookieList.length;i++){
      let coo = cookieList[i].split("=");
      if(coo[0].replace(/\s+/g,'') == name){
          return coo[1];
      }
  }
  return "";
}

decodeURIComponent([document.cookie.match(/;?(?<=tz=)([^;]+)/g)].toString())


// localStorage 过期删除

var expires = 24 * 36e5 * 7;  // 过期时间：7 天

// 存储时加个时间戳
localStorage.setItem('userid', JSON.stringify({
  data: 1,
  stamp: Date.now() + expires
}));

// 取值时进行判断
var store_userid = JSON.parse(localStorage.getItem('userid'));
var uidStamp = store_userid.stamp;
var userid;

if (uidStamp <= Date.now()) {  // 过期
  localStorage.removeItem('userid');
} else {
  userid = store_userid.data;
}


console.log('hello');