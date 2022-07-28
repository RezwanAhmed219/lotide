// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: "${actual}" === "${expected}"`)
  } else if (actual !== expected)
    console.log(`🔴🔴🔴 Assertion Failed: "${actual}" !== "${expected}"`);
};


// CODEforthis

const countLetters = function (str) {
  const resultObj = {};
  const strLowerCase = str.toLowerCase();
  for (let val of strLowerCase) {
    if (!resultObj[val])
      resultObj[val] =1;
    else
      resultObj[val]++;
  }
  return resultObj
}

// TEST CODE

console.log(countLetters('LHL'))
console.log(countLetters("Lighthouse in the house"))
