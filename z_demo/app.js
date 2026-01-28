if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then((reg) => {
      console.log('Service Worker 注册成功', reg)
      document.getElementById('status').textContent = '状态：已注册'
    })
    .catch((err) => console.error('SW 注册失败', err))
} else {
  document.getElementById('status').textContent =
    '状态：浏览器不支持 Service Worker'
}
