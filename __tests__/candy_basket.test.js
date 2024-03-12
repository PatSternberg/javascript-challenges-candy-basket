// __tests__/candy_basket.test.js

const { Candies } = require('../src/candy_basket');

// describe('JestTests', function() {
//   it('correctly sources file', function() {
//     result = var1
//     expect(result).toBe(3)
//   });
//   it('correctly sources functions', function() {
//     result = var1
//     newResult = var2(result)
//     expect(newResult).toBe(6)
//   });
// });

const candies = new Candies([
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
]);


// 

console.log(candies.searchCandies('Ma', 10));
// [ 'Mars', 'Maltesers' ]

// > searchCandies('Ma', 2); // Maltesers excluded: it's more than 2
// [ 'Mars' ]

// > searchCandies('S', 10); 
// [ 'Skitties', 'Skittles', 'Starburst' ]

// > searchCandies('S', 4); 
// [ 'Skitties', 'Skittles' ] // Starbust excluded: it's more than 4

describe('searchCandiesTests', () => {
  it('search 2 letters, exclude none', () => {
    expect(candies.searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
  });
  it('search 2 letters, exclude some', () => {
    expect(candies.searchCandies('Ma', 2)).toEqual([ 'Mars' ])
  });
  it('search 1 letter, exclude none', () => {
    expect(candies.searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ])
  });
  it('search 1 letter, exclude some', () => {
    expect(candies.searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ])
  });
});