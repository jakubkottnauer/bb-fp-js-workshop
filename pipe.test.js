const { pipe, pipe2, pipe3 }  = require('./pipe');

const addNumber = num => x => x + num
const add5 = x => addNumber(5)(x)
const mult2 = x => x * 2
const toString = x => x.toString()

describe('pipe2', () =>  {
  it('pipes two functions in the correct order', () => {
    const calculate = pipe2(add5, mult2)
    const value = 5
    expect(calculate(value)).toEqual(20)
  });

  it('works correctly when nesting pipes', () => {
    const processInput = pipe2(pipe2(add5, mult2), toString)

    const value = 5
    expect(processInput(value)).toEqual('20')
  });
});

describe('pipe3', () =>  {
  it('pipes three functions in the correct order', () => {
    const calculate = pipe3(add5, mult2, addNumber(-3))
    const value = 5
    expect(calculate(value)).toEqual(17)
  });
});

describe('pipe', () =>  {
  it('works with a single function', () => {
    const calculate = pipe(add5)
    const value = 5
    expect(calculate(value)).toEqual(10)
  });

  it('pipes two functions in the correct order', () => {
    const calculate = pipe(add5, mult2)
    const value = 5
    expect(calculate(value)).toEqual(20)
  });

  it('pipes three functions in the correct order', () => {
    const calculate = pipe(add5, mult2, addNumber(-3))
    const value = 5
    expect(calculate(value)).toEqual(17)
  });

  it('pipes four functions in the correct order', () => {
    const calculate = pipe(add5, mult2, add5, addNumber(-3))
    const value = 5
    expect(calculate(value)).toEqual(22)
  });

  it('pipes five functions in the correct order', () => {
    const calculate = pipe(addNumber(0), add5, mult2, add5, addNumber(-3))
    const value = 5
    expect(calculate(value)).toEqual(22)
  });
});
