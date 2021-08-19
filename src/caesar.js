// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //initialize return variable
    let newPhrase = "";
    //checks if shift is a valid input
    if(shift === 0 || shift > 25 || shift < -25){
      return false;
    }
    //loops through the inputs string 
    for(let i = 0; i < input.length; i++){
        //converts char to lowercase then to its askii value and checks if its outside of askii letter range
         if(input.toLowerCase().charCodeAt(i) > 122 || input.toLowerCase().charCodeAt(i) < 97){
          //if it passes it adds the char value at i to the newPhrase
          newPhrase = newPhrase + input.charAt(i);
          continue;
         }
      
         //value that holds askii value of that char at i
      let lowerCaseNum = input.toLowerCase().charCodeAt(i);
      if(encode === true){
        //initializes shifted value to lowerCaseNum + the given shift
        let shifted = lowerCaseNum + shift;

        if(shifted >= 123){
          //subtract 26 from the shifted askii value if its greater than 124 (invalid character)
          shifted = shifted - 26;
        } else if(shifted <= 96){
          //add 26 from the shifted askii value if its less than than 97 (invalid character)
          shifted = shifted + 26;
        }
        
        //initialize shiftedChar to char value of the askii number
        let shiftedChar = String.fromCharCode(shifted);
        //adds shifted char to our return value
        newPhrase = newPhrase + shiftedChar; 
        
        } //in case of decoding
        else if(encode === false){
          //initializes shifted value to lowerCase - given shift, so we can reverse the shift (decode)
            let shifted = lowerCaseNum - shift;
            if(shifted > 122 )
            {
              //if shifted value is greater than 122 subtract 26 to make it a valid askii number
              shifted = shifted - 26;
            } else if(shifted < 97) {
              //if shifted value is greater than 122 subtract 26 to make it a valid askii number
              shifted = shifted + 26;
            }
          //convert askii number to its char
          let shiftedChar = String.fromCharCode(shifted);
          //add shiftedChar to our return value
          newPhrase = newPhrase + shiftedChar;
        
      }         
    }
    //returns decoded or encoded message
      return newPhrase;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
