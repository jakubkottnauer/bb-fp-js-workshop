
const pipe2 = (f1, f2) => (...args) => f2(f1(...args))

const pipe3 = (f1, f2, f3) => (...args) => f3(f2(f1(...args)))

const pipe = (...fns) => {
  // Your implementation goes here.
  // Hint: you can use `Array.protype.reduce` and our own `pipe2`
  return null
}

module.exports = {
  pipe,
  pipe2,
  pipe3,
};
