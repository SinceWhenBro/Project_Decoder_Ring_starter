const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const cipher = {
    11: 'a',
    21: 'b',
    31: 'c',
    41: 'd',
    51: 'e',
    12: 'f',
    22: 'g',
    32: 'h',
    42: 'i/j',
    52: 'k',
    13: 'l',
    23: 'm',
    33: 'n',
    43: 'o',
    53: 'p',
    14: 'q',
    24: 'r',
    34: 's',
    44: 't',
    54: 'u',
    15: 'v',
    25: 'w',
    35: 'x',
    45: 'y',
    55: 'z'
  }
  //makes an array filled with smaller arrays that hold the key value pair
  const cipherArr = Object.entries(cipher)
  //allows for i or j to be used at property '42'
  cipherArr.push([42, 'i'])
  cipherArr.push([42, 'j'])


  function polybius(input, encode =true) {
    // your solution code here
    //counting how many chars are not spaces from the input
    const nonSpaceChars = input.split(' ').reduce((acc, ele) => acc += ele.length, 0)
    let answerStr = ''
    //checks if number of chars is even
    if (!encode && nonSpaceChars % 2 !== 0) {
      return false
    } else if (!encode) {
      let cipherKey = ''
      //loops through input to pull each char
      for (const char of input) {
        //if char is a space add space to return value
        if (char === ' ') {
          answerStr += char
        } else if (cipherKey.length > 0) {
          //adds cipherKey to char
          cipherKey += char
          //finds the int value of the cipher object at the index of cipher key, then adds that value to the return 
          answerStr += cipher[parseInt(cipherKey)]
          //reinitializes cipherKey to an empty string
          cipherKey = ''
        } else {
          cipherKey += char
        }
      }
      //return user output
      return answerStr
    } else {
      for (char of input) {
        if (char === ' ') {
          answerStr += char
          continue
        }
        //finds the subarray that has the letter were trying to encode
        const encoded = cipherArr.filter(subArr => subArr.includes(char))[0]
        //pushing the first value of the array, the number associated with that 
        answerStr += encoded[0]
      }
      //return user output
      return answerStr
    }

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };