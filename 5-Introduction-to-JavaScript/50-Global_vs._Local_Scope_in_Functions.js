// Local variables takes priority over global variables when they are both present and local is within the function
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  var myOutfit = "sweater";
  return myOutfit;
  // Only change code above this line
  return outerWear;
}

myOutfit();
