function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 1000) + 500;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

function getFile(file) {
	fakeAjax(file,function(text){
    handleResponse(file, text)
	});
}
function handleResponse(filename, contents) {
  if (!(filename in responses)) {
    responses[filename] = contents
  }
  var filenames = ['file1', 'file2', 'file3']
  for (let i = 0; i < filenames.length; i ++) {
    if (filenames[i] in responses) {
      if (typeof responses[filenames[i]] == 'string') {
        output(responses[filenames[i]])
        responses[filenames[i]] = false
      }
    } else {
      return
    }
  }
  output('compete')
}
var responses = {}

getFile("file1");
getFile("file2");
getFile("file3");


function makeThunk (fn) {
  var args = [].slice.call(arguments, 1)
  return function (cb) {
    args.push(cb)
    fn.apply(null, args)
  }
}

function addAsync(x, y, cb) {
  setTimeout(() => {
    cb(x + y)
  })
}

var thunk = makeThunk(addAsync, 10, 15)
thunk(function (num) {
  console.log(num);
})

function coroutine (g) {
  var it = g()
  return function () {
    return it.next.apply(it, arguments)
  }
}

var run = coroutine(function *() {
  var x = 1 + (yield);
  var y = 1 + (yield)
  yield (x + y)
})

run()
run(10)
console.log('coroutine', run(30).value);

var run = coroutine(function *() {
  var x = 1 + (yield getData(10))
  var y = 1 + (yield getData(30))
  var answer = (yield getData('meaning life' + (x + y)))
  console.log(answer, 'answer');
})
function getData(d) {
  setTimeout(() => {
      run(d)
  });
}
run()
