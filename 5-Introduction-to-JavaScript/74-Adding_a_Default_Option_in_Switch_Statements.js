// In this lesson I am learning how to set different return statement to cases. As well as how to set a default statement similar to the else statement
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 'a': answer = 'apple';
      break;
    case 'b': answer = "bird";
      break;
    case "c": answer = "cat";
      break;
    default: answer = "stuff";
    break;
  }
  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff('a');
switchOfStuff('e');
