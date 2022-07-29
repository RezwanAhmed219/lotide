// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: "${actual}" === "${expected}"`)
  } else if (actual !== expected)
    console.log(`🔴🔴🔴 Assertion Failed: "${actual}" !== "${expected}"`);
};

// findKey Code

const findKey = function(array, callback) {
  for (const key in array) {
    if (callback(array[key])) {
      return key;
    }
  }
  return undefined 
};




assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)), "noma");

