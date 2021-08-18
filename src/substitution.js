// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  
  
  function isValid(alpha) {
    return alpha && alpha.length == 26 &&
      (new Set(alpha)).size == 26
  }
  
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
    let alphaObj = {};
    let newPhrase = "";
    let isTrue = isValid(alphabet);
    if(!isTrue){
      return false;
    }    
      
    for(let i = 0; i < alphabet.length; i++){
      alphaObj[i] = alphabet.toLowerCase().charAt(i);
    }
    
    if(encode === true){
    for(let i =0; i < input.length; i++){
      let isSpace = input.charAt(i);
      if(isSpace === " "){
        newPhrase += " ";
        continue;
      }
      let charCode = input.toLowerCase().charCodeAt(i);
      charCode = charCode - 97;
      newPhrase = newPhrase + alphaObj[charCode];
    }
      
   } if(encode === false){
     console.log("newPhrase",newPhrase)
     for(let i = 0; i < input.length; i++){
       let charAt = input.toLowerCase().charAt(i);
       let isSpace = input.charAt(i);
        if(isSpace === " "){
        newPhrase += " ";
        continue;
        }
       for(let j = 0; j < alphabet.length; j++){
         if(alphabet[j]=== charAt){
           newPhrase+=normalAlphabet[j];
         }
       }
     }
   }
    return newPhrase;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
