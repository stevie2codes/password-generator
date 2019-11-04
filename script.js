/*The user will be prompted to choose from the following password criteria:
* Length (must be between 8 and 128 characters)
* Character type:
* Numeric characters
* Lowercase characters
* Uppercase characters
The application should validate user input and ensure that at least one character type is selected.*/

const specialSet = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
const numericSet = "0123456789";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generate() {
  let userInput = prompt(
    "Enter a number between 8 - 128 for length of password"
  );
  let userSize = parseInt(userInput);
  let specialOption = confirm(
    "Would you like your password to contain special characters?"
  );
  let numericOption = confirm(
    "Would you like your password to contain numbers?"
  );
  let lowerOption = confirm(
    "would you like your password to contain lower case letters?"
  );
  let upperOption = confirm(
    "would you like your password to contain Upper case letters?"
  );
  let passwordResult = "";
  let charsConfirmed = "";

  if (userSize < 8 || userSize > 128 || isNaN(userSize)) {
    alert("You must enter a valid number");
  }
  else if (specialOption){ 
    charsConfirmed += specialSet;
  }
  
   if(numericOption) {
    charsConfirmed += numericSet;
}
  if (lowerOption) {
    charsConfirmed += lowerSet;
  }
  
   if(upperOption){ 
    charsConfirmed += upperSet;
 }
  else{ (charsConfirmed = null)
    alert("You must choose at least one option of character");
  }
  passLength = charsConfirmed.length;

  function randomize(length) {
    for (let i = 0; i <= length; i++) {
      passwordResult += charsConfirmed.charAt(
        Math.floor(Math.random() * passLength - 1)
      );
    }
    return passwordResult;
  }
  document.getElementById("display").innerHTML = randomize(userSize);
}
