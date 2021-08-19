// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  
  //checks if the alphabet given is valid
  function isValid(alpha) {
    return alpha && alpha.length == 26 &&
      (new Set(alpha)).size == 26
  }
  
  //object conatining normal alphabet at their adjacent indexes minus 1 (a = 0)
  let normalAlphabet = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
    10: "k",
    11: "l",
    12: "m",
    13: "n",
    14: "o",
    15: "p",
    16: "q",
    17: "r",
    18: "s",
    19: "t",
    20: "u",
    21: "v",
    22: "w",
    23: "x",
    24: "y",
    25: "z"   
  }
  
  function substitution(input, alphabet, encode = true) {
    //initialize alpha object to populate with given alphabet
    let alphaObj = {};
    //initialize string to return
    let newPhrase = "";
    //checks if given alphabet is a valid alphabet
    let isTrue = isValid(alphabet);
    if(!isTrue){
      return false;
    }    
    //loop through given alphabet to populate alphaObj 
    for(let i = 0; i < alphabet.length; i++){
      alphaObj[i] = alphabet.toLowerCase().charAt(i);
    }
    
    if(encode === true){
    //loop through inputted string
    for(let i =0; i < input.length; i++){
      //parse string into chars
      let isSpace = input.charAt(i);
      //if char is a space add a space to the return statement
      if(isSpace === " "){
        newPhrase += " ";
        continue;
      }
      //get askii value of input string's individual chars
      let charCode = input.toLowerCase().charCodeAt(i);
      //subtract 97 from that value to get it's index in the normal alphabet (formula)
      charCode = charCode - 97;
      //add the alphaObj at the value of charCode(holds the index value in normal alpha)
      newPhrase = newPhrase + alphaObj[charCode];
    }
      
   } if(encode === false){
     console.log("newPhrase",newPhrase)
     //loop through input string
     for(let i = 0; i < input.length; i++){
       //checks for space 
       let charAt = input.toLowerCase().charAt(i);
       //checks if individual char is space
       let isSpace = input.charAt(i);
        if(isSpace === " "){
        newPhrase += " ";
        continue;
        }
        //loop through given alphabet string
       for(let j = 0; j < alphabet.length; j++){
         if(alphabet[j]=== charAt){
           //finds where in our given alphabet that we populated matches the char we pulled in
           newPhrase+=normalAlphabet[j];
         }
       }
     }
   }
   //return decoded or encoded string
    return newPhrase;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
