function characterPositions(inputString) {
  var noSpaces = inputString.split(" ").join("");
  var positionList = {};
  //remove spaces
  // count the occurrences of values in the string - loop over values of string
  // go over each character in the input string
  for (i = 0; i < noSpaces.length; i++) {
    var character = noSpaces[i];
     //identify character at i
    //check if character is key in positionList
    if (positionList[character]) {
    //if it isn't, make it one, if it is update value of key to include letter
      positionList[character].push(i);
    } else {
      positionList[character] = [i];
    }
  }

  return positionList;
}

console.log(characterPositions('lighthouse in the house'));