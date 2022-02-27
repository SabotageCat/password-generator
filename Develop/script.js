// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowercaseLettersArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseLettersArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbersArray = ['0','1','2','3','4','5','6','7','8','9'];
var symbolsArray = ['`','~','!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}',';',':','"',"'",',','<','.','>','/','?',"|"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword(charAmount, withUppercase, withNumbers, withSymbols);
  var passwordText = document.querySelector("#password");
  debugger;
  //prompt user to enter amount of characters
  var charAmount = window.prompt("How many characters do you want your password to have? Enter an amount between 8 and 128.");
  //make sure user enters valid amount
  if (charAmount === '' || charAmount === 'null' || charAmount < 8 || charAmount > 128) {
    alert("You need to enter a valid value!");
    return writePassword();
  } else {
    charAmount = parseInt(charAmount);
  }

  //prompt user to include uppercase letters
  var withUppercase = window.prompt("Do you want to include UPPERCASE LETTERS in your password? Enter YES or NO.");
  //make sure user enters valid entry
  if (withUppercase === '' || withUppercase === 'null') {
    alert("You need to enter YES or NO.");
    return;
  }
  //to lowercase
  withUppercase = withUppercase.toLowerCase();
  //make sure user enter's YES or NO
  if (withUppercase === 'yes') {
    withUppercase = true;
  } else {
    withUppercase = false;
  }

  //prompt user to include numbers
  var withNumbers = window.prompt("Do you want ot include NUMBERS in your password? Enter YES or NO")
  //make sure user enters valid entry
  if (withNumbers === '' || withNumbers === 'null') {
    alert("You need to enter YES or NO.");
    return;
  }
  //to lowercase
  withNumbers = withNumbers.toLowerCase();
  //make sure user enter's YES or NO
  if (withNumbers === 'yes') {
    withNumbers = true;
  } else {
    withNumbers = false;
  }

  //prompt user to include symbols
  var withSymbols = window.prompt("Do you want ot include SYMBOLS in your password? Enter YES or NO")
  //make sure user enters valid entry
  if (withSymbols === '' || withSymbols === 'null') {
    alert("You need to enter YES or NO.");
    return;
  }
  //to lowercase
  withSymbols = withSymbols.toLowerCase();
  //make sure user enter's YES or NO
  if (withSymbols === 'yes') {
    withSymbols = true;
  } else {
    withSymbols = false;
  }
  console.log(withNumbers);
  console.log(withSymbols);
  console.log(withUppercase);

  generatePassword(charAmount, withUppercase, withNumbers, withSymbols);

  passwordText.value = password;
}

var generatePassword = function (charAmount, withUppercase, withNumbers, withSymbols) {
  //include lowercase letters by default
  var characters = lowercaseLettersArray;
  if (withUppercase === true) {
    characters = characters.concat(uppercaseLettersArray);
  }
  if (withNumbers === true) {
    characters = characters.concat(numbersArray);
  }
  if (withSymbols === true) {
    characters = characters.concat(symbolsArray);
  }

  var passwordText = [];

  //for loop to randomly generate password with given parameters
  for (i = 0; i < charAmount; i++) {
    var passwordCharacters = characters[Math.floor(Math.random() * characters.length)]
    passwordText.push(passwordCharacters)
  }
  return passwordText.join('');
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
