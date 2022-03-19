// click generate password- click event
// select different criteria for password
// choose length of characters (8-128)- function input number
// choose character types (lowercase, uppercase, numeric, special characters) function input
// input validated- one character type selected- boolean?
// displayed as an alert or written on page- create alert

// Assignment code here
var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "10123456789";
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


function passwordFunction() {
  let text;
  let length = prompt("What is the password length?");
  if (length >= "8" || length <= "128") {
    text = "User does not want password";
  } else {
    text = "Passwords can be between 8 and 128 characters. Please try again."
  }
  document.getElementById("password").innerHTML = text;
  }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
