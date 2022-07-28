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

// CODES HERE

  const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    if (eqObjects(actual, expected)) {
      console.log(`✅✅✅ ${inspect(actual)} === ${inspect(expected)}`) 
    } else {
      console.log(`🔴🔴🔴 ${inspect(actual)} !== ${inspect(expected)}`)
    }

  };

// TEST CODE