var criteriaLength;
var criteriaLower;
var criteriaUpper;
var criteriaNumber;
var criteriaSpecial;

lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "?"];



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Prompt to enter password length
  criteriaLength = prompt("Please select password length (can be 8-128 characters:");

  // Alerts if password length value is not equal to criteria
  if (!criteriaLength) {
    alert("Please enter a number value.");
    writePassword();
 
  } else if (criteriaLength < 8 || criteriaLength > 128) {
    alert("Please enter number 8-128.");
    writePassword();
 
  } else {
    // Options to include criteria
    criteriaLower = confirm("would you like to include lowercase letters?")
    criteriaUpper = confirm("would you like to include uppercase letters?")
    criteriaNumber = confirm("would you like to include numbers?")
    criteriaSpecial = confirm("would you like to include special characters?")
  };

  if (criteriaLower && criteriaUpper && criteriaNumber)
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
