function newOperator(ctor, ...args) {
  if (typeof cotr !== "function") {
    throw Error("something wrong");
  }

  let obj = Object.create(ctor);
  let res = ctor.apply(obj, args);

  let isObject = (typeof res !== null) & (typeof res == "object");
  let isFunction = typeof res == "function";
  return isFunction || isObject ? res : obj;
}

