// TEST/ASSERTION FUNCTIONS
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

// ACTUAL FUNCTION
const middle = function(array) {
  let middleArr = [];
  let middleAvg = Math.floor(array.length/2);

  if (array.length <3) {
    middleArr = [];
  } else if (array.length % 2 !== 0) {
    middleArr = [array[middleAvg]];
  } else {
    middleArr = [array[middleAvg - 1], array[middleAvg]];
  }
  return middleArr;
  }  


// TEST CODE

// q = [1,2,3,4,5,6,7]
// console.log(middle(q))

// w = [45,676,345,785,3432,67567,234,5756,4534,456745]
// console.log(middle(w))

// e = [1,2]
// console.log(middle(e))