const { curry1, curry2 }  = require('./curry')

describe('curry1', () =>  {
  const appendHello = str => str + ' hello'
  const cAppendHello = curry1(appendHello)
  
  it('curries correctly', () => {
    expect(cAppendHello()('John')).toEqual('John hello')
    expect(cAppendHello('John')).toEqual('John hello')
  });
});

describe('curry2', () =>  {
  const multTwoNum = (x, y) => x * y
  const cMultTwoNum = curry2(multTwoNum)

  it('curries correctly', () => {
    expect(cMultTwoNum(3, 2)).toEqual(6)
    expect(cMultTwoNum(3)(2)).toEqual(6)
    expect(cMultTwoNum()(3, 2)).toEqual(6)
    expect(cMultTwoNum()()(3)(2)).toEqual(6)
  });
});
