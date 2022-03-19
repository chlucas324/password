// click generate password- click event
// select different criteria for password
// choose length of characters (8-128)- function input number
// choose character types (lowercase, uppercase, numeric, special characters) function input
// input validated- one character type selected- boolean?
// displayed as an alert or written on page- create alert

// Assignment code here
var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "10123456789";
var special = "!#$%&'()*+,-./:;<=>?@[/]^_`{|}~";
var length = prompt("How many characters would you like your password?");
while(length < 8 || length > 128) length = prompt("Length must be between 8 and 128 characters. Try again.");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// function passwordFunction(){
//   prompt ("These are your options.");
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
