var criteriaLength;
var criteriaLower;
var criteriaUpper;
var criteriaNumber;
var criteriaSpecial;



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
  }
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
