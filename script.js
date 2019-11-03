/*The user will be prompted to choose from the following password criteria:

* Length (must be between 8 and 128 characters)

* Character type:

  * Special characters ([see examples](https://www.owasp.org/index.php/Password_special_characters))

  * Numeric characters

  * Lowercase characters

  * Uppercase characters

The application should validate user input and ensure that at least one character type is selected.*/


const specialSet = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~" ;
const numericSet = "0123456789";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let charsConfirmed = '';
let passwordResult = '';

function generate() {
  let userInput = prompt("Enter a number between 8 - 128 for length of password");
  let userSize = parseInt(userInput);
  

  if (userSize < 8 || userSize > 128 || isNaN(userSize)) {
    alert("You must enter a valid number");
  }
  else {
  let specialOption = confirm("Would you like your password to contain special characters?");
  let numericOption = confirm("Would you like your password to contain numbers?");
  let lowerOption = confirm("would you like your password to contain lower case letters?");
  let upperOption = confirm("would you like your password to contain Upper case letters?");

  if(specialOption) {
   charsConfirmed += specialSet;
  }
  if(numericOption) {
   charsConfirmed += numericSet ;
  }
  if(lowerOption) {
   charsConfirmed += lowerSet;
  }
  if(upperOption) {
   charsConfirmed += upperSet;
  }
  }
  passwordResult = charsConfirmed.length;
  console.log(passwordResult);
  
  }

  
  





