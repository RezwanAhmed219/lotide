const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (i = 0; i <arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false
    }
  }
   return true;
};

const assertArrayEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`🔴🔴🔴 Assertion Failed: "${arr1}" !== "${arr2}"`)
  }
  for (i = 0; i <arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      console.log(`🔴🔴🔴 Assertion Failed: "${arr1}" !== "${arr2}"`)
    }
  }
  console.log(`🟢🟢🟢 Assertion Passed: "${arr1}" === "${arr2}"`)
};

// assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)


// MAPS CODE

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
