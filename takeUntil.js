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

assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)


// takeUntil code

const takeUntil = function(array, callback) {
  const results = [];
  for (let arr of array) {
    if (callback(arr)) {
      return results;
    } else {
      results.push(arr);
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// Expected Output

// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I've', 'been', 'to', 'Hollywood' ]