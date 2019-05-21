// The strict equality (===) doesn't convert values/strings if they are not excatly the program returns Not Equal  
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
