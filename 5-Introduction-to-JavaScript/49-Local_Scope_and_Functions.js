// I am learning how to declare variables within functions so they have local scope.
function myLocalScope() {
  var myVar= "Test";
  'use strict'; // you shouldn't need to edit this line
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
