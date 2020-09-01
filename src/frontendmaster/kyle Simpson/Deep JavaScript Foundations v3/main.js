function sign(v) {
  return v !== 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1
}
function formatTrend(trendRate) {
  var direction = (trendRate < 0 || Object.is(trendRate, -0)) ? "👇" : '👆'
  return `${direction} ${Math.abs(trendRate)}`
}

var teacher = 'kyle'

function otherClass () {
  teacher = 'suzy'
  topic = 'react'
  console.log('welcome');
}

otherClass()

console.log(teacher);
console.log(topic);
