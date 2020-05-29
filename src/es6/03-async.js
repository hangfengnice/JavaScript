


function test() {
  try {
    Promise.resolve().then(() => {
      const data = JSON.parse(aaa)
    }).catch(function (err) {
      console.log(err, 'inner err');
    })
  } catch (e) {
    console.log(e, 'outer e');
  }
}
test()
