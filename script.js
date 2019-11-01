/*The user will be prompted to choose from the following password criteria:

* Length (must be between 8 and 128 characters)

* Character type:

  * Special characters ([see examples](https://www.owasp.org/index.php/Password_special_characters))

  * Numeric characters

  * Lowercase characters

  * Uppercase characters

The application should validate user input and ensure that at least one character type is selected.*/


const specialSet = ("!#$%&'()*+,-./:;<=>?@[]^_`{|}~");
const numericSet = "0123456789";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";





function generate(){
    let userInput = prompt("Enter a number between 8 - 128 for length of password");
    let allSets = specialSet + numericSet + lowerSet + upperSet;
    let passwordResult = "";

  if(userInput < 8 || userInput > 128 || userInput === NaN){
      return alert("You must enter a valid number");
  };
  let specialOption = confirm("Would you like your password to contain special characters?");
  let numericOption = confirm("Would you like your password to contain numbers?");
  let lowerOption = confirm("would you like your password to contain lower case letters?");
  let upperOption = confirm("would you like your password to contain Upper case letters?");
   
  if(specialOption === true && numericOption === true && lowerOption === true && upperOption === true ){
      return document.getElementById("display").innerHTML = allSets;

  }
    
}
