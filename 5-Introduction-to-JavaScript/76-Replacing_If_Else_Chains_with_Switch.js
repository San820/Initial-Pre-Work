// I am learning how to write switch statements as opposed to if/else if. The code looks cleaner and easier to read
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 'bob': answer = "Marley";
    break;
    case 42: answer = "The Answer";
    break;
    case 1: answer = "There is no #1";
    break;
    case 7: answer = "Ate Nine";
    break;
    case 'John': answer = "";
    break;
    case 156: answer = "";
    break;
    case 99: answer = "Missed me by this much!";
    break;
  }
  // Only change code above this line
  return answer;
}

// Change this value to test
chainToSwitch(7);
