// navigator screen

console.log(navigator.userAgent)
console.log(navigator.plugins)
console.log(navigator.platform) // MacIntel // 返回用户的操作系统信息，比如MacIntel、Win32、Linux x86_64等 。
console.log(navigator.onLine)
//window.addEventListener('offline', function(e) { console.log('offline'); });
// window.addEventListener('online', function(e) { console.log('online'); });

console.log(navigator.languages)  // ["zh-CN", "zh", "en"]
console.log(navigator.language);  // zh-CN
console.log(navigator.geolocation)
// const Geolocation = navigator.geolocation;
// Geolocation.getCurrentPosition(
//   res => {
//     console.log(res);
//   },
//   err => {
//     console.log(err);
//   },
//   {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
//   }
// );

console.log(navigator.cookieEnabled)

console.log(navigator.javaEnabled()) // 是否能运行 Java Applet 小程序。

// screen

console.log(screen.height, screen.availHeight, screen.pixelDepth)
console.log(screen.orientation)