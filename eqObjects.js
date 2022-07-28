// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: "${actual}" === "${expected}"`)
  } else if (actual !== expected)
    console.log(`🔴🔴🔴 Assertion Failed: "${actual}" !== "${expected}"`);
};

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

const eqObjects = function(object1, object2) {
if (Object.keys(object1).length !== Object.keys(object2).length) {  
  return false; }
for (let key in object1) {
  if(Array.isArray(object1[key] === Array.isArray(object2[key]))) {
    return false;
  } else {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
}
  return true;
};

// TEST CODE

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false