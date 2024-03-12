// __tests__/candy_basket.test.js

const { var1, var2 } = require('../src/candy_basket');

describe('JestTests', function() {
  it('correctly sources file', function() {
    result = var1
    expect(result).toBe(3)
  });
  it('correctly sources functions', function() {
    result = var1
    newResult = var2(result)
    expect(newResult).toBe(6)
  });
});