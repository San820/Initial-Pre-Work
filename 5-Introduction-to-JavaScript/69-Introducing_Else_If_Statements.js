// if else if & else can be combined together when multiple conditions need to be addressed. i.e bigger than 10, smaller than 4, between 4-10
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";}
}

// Change this value to test
testElseIf(11);
