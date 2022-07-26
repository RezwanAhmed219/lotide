// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: "${actual}" === "${expected}"`)
  } else if (actual !== expected)
    console.log(`🔴🔴🔴 Assertion Failed: "${actual}" !== "${expected}"`);
};


const head = function (arr) {
  return arr[0];
// if (arr = 0) {
//   return undefined
//  }
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(0));

