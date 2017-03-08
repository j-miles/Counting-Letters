function countLetters(inputString) {
  var noSpaces = inputString.split(" ").join("");
  var finalCount = {};
  //remove spaces
  // count the occurrences of values in the string - loop over values of string
  // go over each character in the input string
  for (i = 0; i < noSpaces.length; i++) {
    var character = noSpaces[i];
     //identify character at i
    //check if character is key in finalCount
    if (finalCount[character]) {
    //if it isn't, make it one, if it is update value of key to include letter
      finalCount[character] += 1;
    } else {
      finalCount[character] = 1;
    }
  }

  return finalCount;
}

console.log(countLetters('lighthouse in the house'));