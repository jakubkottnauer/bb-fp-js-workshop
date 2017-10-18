const curry1 = (fn) => {
  return function f1(a) {
    return arguments.length === 0 
      ? f1
      : fn(a);
    }
}

const curry2 = (fn) => {
  return function f2(a, b) {
    // Your implementation goes here.
    // Hint: you can use curry1
  }
}

module.exports = {
  curry1,
  curry2
}
