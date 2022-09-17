// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var criteriaLength = prompt("Please select password length (can be 8-128 characters:");

  if (!criteriaLength) {
    alert("Please enter a value.")
  } else if (criteriaLength < 8 || criteriaLength > 128) {
    alert("Please enter number 8-128.")
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
