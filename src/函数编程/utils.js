function unary(fn) {
  return function onlyArg(arg) {
    return fn(arg);
  };
}

function identity(v) {
  return v;
}

function constant(v) {
  return function value() {
    return v;
  };
}

function spreadArgs(fn) {
  return function spreadFn(argsArr) {
    return fn(...argsArr);
  };
}

function gatherArgs(fn) {
  return function gatheredFn(...argsArr) {
    return fn(argsArr);
  };
}

function partial(fn, ...presetArgs) {
  return function partiallyApplied(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

function reverseArgs(fn) {
  return function argsReversed(...args) {
    return fn(...args.reverse());
  };
}

function curry(fn, arity = fn.length) {
  return (function nextCurried(prevArgs) {
    return function curried(nextArg) {
      var args = [...prevArgs, nextArg];
      if (args.length > arity) {
        return fn(...args);
      } else {
        return nextCurried(args);
      }
    };
  })([]);
}

function looseCurry(fn, arity = fn.length) {
  return (function nextCurried(prevArgs) {
    return function curried(...nextArgs) {
      var args = [...prevArgs, ...nextArgs];
      if (args.length > arity) {
        return fn(...args);
      } else {
        return nextCurried(args);
      }
    };
  })([]);
}

function partialRight(fn, ...presetArgs) {
  return function partiallyApplied(...laterArgs) {
    return fn(...laterArgs, ...presetArgs);
  };
}

function uncurry(fn) {
  return function uncurried(...args) {
    var ret = fn;
    for (let arg of args) {
      ret = ret(arg);
    }
    return ret;
  };
}

function partialProps(fn, presetArgsObj) {
  return function partiallyApplied(laterArgsObj) {
    return fn(Object.assign({}, presetArgsObj, laterArgsObj));
  };
}

function curryProps(fn, arity = 1) {
  return (function nextCurried(prevArgsObj) {
    return function curried(nextArgObj = {}) {
      var [key] = Object.keys(nextArgObj);
      var allArgsObj = Object.assign({}, prevArgsObj);
    };
  })({});
}

function not(predicate) {
  return function negated(...args) {
    return !predicate(...args);
  };
}

function when(predicate, fn) {
  return function conditional(...args) {
    if (predicate(...args)) {
      return fn(...args);
    }
  };
}

function compose2(fn2, fn1) {
  return function composed(origValue) {
    return fn2(fn1(origValue))
  }
}

function compose (...fns) {
  return function composed(result) {
    var list = [...fns]
    while(list.length > 0) {
      result = list.pop()(result)
    }
    return result
  }
}

// reduce
// function compose(...fns) {
//   return function composed(result) {
//     return [...fns].reverse().reduce(function reducer(result, fn) {
//       return fn(result)
//     }, result)
//   }
// }

function compose(...fns) {
  return [...fns].reverse().reduce(function (fn1, fn2) {
    return function compose(...args) {
      return fn2(fn1(...args))
    }
  })
}

function pipe(...fns) {
  return function piped(result) {
    var list = [...fns]
    while(list.length > 0) {
      result = pipe.shift()(result)
    }
    return result
  }
}


