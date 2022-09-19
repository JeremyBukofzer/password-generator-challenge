
// possible characters to be used in password
var charsLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charsUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charsNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var charsSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "?"];
var selections = [];

function generatePassword() {
  // Prompt to enter password length
  criteriaLength = prompt("Please select password length (can be 8-128 characters:");

  // Alerts if password length value is not equal to criteria
  if (!criteriaLength) {
 
  // Alerts if entered value is not 8-128
  } else if (criteriaLength < 8 || criteriaLength > 128) {
    alert("Please enter number 8-128.");
    writePassword();
 
  } else {
    alert("Your password will be " + criteriaLength + " characters long.")
  }
 
    // Options to include criteria with validations for selections
    criteriaLower = confirm("would you like to include lowercase letters?")
    if (!criteriaLower) {
      alert("Lowercase letters will NOT be included in your password.")
    } else {
      alert("Lowercase letters will be included in your password.")
    }
    criteriaUpper = confirm("would you like to include uppercase letters?")
    if (!criteriaUpper) {
      alert("Uppercase letters will NOT be included in your password.")
    } else {
      alert("Uppercase letters will be included in your password.")
    }
    criteriaNumber = confirm("would you like to include numbers?")
    if (!criteriaNumber) {
      alert("Numbers will NOT be included in your password.")
    } else {
      alert("Numbers will be included in your password.")
    }
    criteriaSpecial = confirm("would you like to include special characters?")
    if (!criteriaSpecial) {
      alert("Special characters will NOT be included in your password.")
    } else {
      alert("Special characters will be included in your password.")
    }
  

  // Alerts if no criteria is entered.
  if (!criteriaLower && !criteriaUpper && !criteriaNumber && !criteriaSpecial) {
    alert("At least one criteria must be selected.")
  }
  //includes selected criteria
  if (criteriaLower) {
    selections = selections.concat(charsLower)
  }
  if (criteriaUpper) {
    selections = selections.concat(charsUpper)
  }
  if (criteriaNumber) {
    selections = selections.concat(charsNumber)
  }
  if (criteriaSpecial) {
    selections = selections.concat(charsSpecial)
  }
  
  //Generates random characters based on selected criteria.
  let createdPassword = "" 
  for (let i = 0; i < criteriaLength; i++) {
    let rando =[Math.floor(Math.random() * selections.length)]
    createdPassword = createdPassword + selections[rando];
  }

  return createdPassword;
  
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
