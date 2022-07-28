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



const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }   
    }
  }
  return results;
};


// TEST CODE

assertArrayEqual(letterPositions("hello").e, [1])
console.log(letterPositions('hello you'))