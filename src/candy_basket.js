// src/candy_basket.js

// Objectives
// Test-drive a complex function.

// We're being given the following array:

// const var1 = 3;
// const var2 = (n) => {
//   return n * 2;
// };

class Candies {

  constructor(candies) {
    this.candies = candies
  };
  
  searchCandies = (name, price) => {
    const filterByPrice = (candy) => {
      if ((candy.price < price) && candy.name.startsWith(name)) {
        return true;
      } else {
        return false;
      };
    };
    const filteredCandies = this.candies.filter(filterByPrice);
    return filteredCandies.map(candy => candy.name);
  };
};

module.exports = { Candies };

// You can notice the shape is similar to what you've worked with before — an array of objects,
// each object having two properties name and price.

// To complete this question, you will some things you've learned previously:
//     The filter and map methods.
//     How to access an object property.
//     You'll also need to find out how to verify whether a string is the prefix for another string.
//     Use the toEqual() Jest matcher.

// You'll test-drive a function searchCandies that takes the following two arguments:
// a search string and a maximum price — and returns only the names of candies matching these criteria:
//     the candy name starts by the search string
//     the candy price is less than the maximum price

// We want the function searchCandies to behave like this:

// > searchCandies('Ma', 10);
// [ 'Mars', 'Maltesers' ]

// > searchCandies('Ma', 2); // Maltesers excluded: it's more than 2
// [ 'Mars' ]

// > searchCandies('S', 10); 
// [ 'Skitties', 'Skittles', 'Starburst' ]

// > searchCandies('S', 4); 
// [ 'Skitties', 'Skittles' ] // Starbust excluded: it's more than 4

// Questions

//     Write tests for this function in a file searchCandies.test.js. There should be at least 4 tests to reflect the different examples above.
//     Implement the function searchCandies and make sure your tests pass.
//     Add one test to verify that the search prefix works when given in lowercase too:

// > searchCandies('ma', 10);
// [ 'Mars', 'Maltesers' ]

//     Implement that new change and make sure the tests pass.
