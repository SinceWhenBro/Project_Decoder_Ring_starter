// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    let newPhrase = "";
    if(shift === 0 || shift > 25 || shift < -25){
      return false;
    }   
    for(let i = 0; i < input.length; i++){
         if(input.toLowerCase().charCodeAt(i) > 122 || input.toLowerCase().charCodeAt(i) < 97){
          newPhrase = newPhrase + input.charAt(i);
          continue;
         }
      
      let lowerCaseNum = input.toLowerCase().charCodeAt(i);
      if(encode === true){
        let shifted = lowerCaseNum + shift;

        if(shifted >= 123){
          shifted = shifted - 26;
        } else if(shifted <= 96){
          shifted = shifted + 26;
        }
        
        let shiftedChar = String.fromCharCode(shifted);
        newPhrase = newPhrase + shiftedChar; 
        
        } else if(encode === false){
            let shifted = lowerCaseNum - shift;
            if(shifted > 122 )
            {
              shifted = shifted - 26;
            } else if(shifted < 97) {
              shifted = shifted + 26;
            }
        
          let shiftedChar = String.fromCharCode(shifted);
          newPhrase = newPhrase + shiftedChar;
        
      }         
    }
      return newPhrase;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
