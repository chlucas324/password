// click generate password- click event
// select different criteria for password
// choose length of characters (8-128)- function input number
// choose character types (lowercase, uppercase, numeric, special characters) function input
// input validated- one character type selected- boolean?
// displayed as an alert or written on page- create alert

// Assignment code here
var generateBtn = document.querySelector("#generate")
generateBtn.addEventListener('click', writePassword);

// Arrays
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u","v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!","#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "/","]", "^", "`", "{", "|", "}", "~"];

// confirm variables
var passwordLength = "";
var confirmLetters;
var confirmNumeric;
var confirmSpecial;

// Add event listener to generate button
// prompt to confirm password length (# of characters)
function generatePassword() {
var passwordLength = prompt("How many characters would you like your password?");
while(passwordLength < 8 || passwordLength > 128) passwordLength = prompt("Length must be between 8 and 128 characters. Try again.");

// confirm parameters of password
var confirmLetters = confirm("Would you like to use letters?");
var confirmNumeric = confirm("Would you like to use numbers?");
var confirmSpecial = confirm("Would you like to use special characters?");

while(!(confirmLetters || confirmNumeric || confirmSpecial)) {
  alert("You must select at least one character type.");
  return generatePassword();
}
}

var chararacters = []
  if (confirmSpecial) {
    character = character.concat(special)
  }

  if (confirmNumeric) {
    character = character.concat(numeric)
  }

  if (confirmLetters) {
    character = character.concat(letters)
  }

console.log(character)
// var randomPassword= "" 
// for (var i = 0; i <passwordLength; i++) {
//   randomPassword = 
// }
// Get references to the #generate element
// 
// function generatePassword(numeric)
// {
//   return numeric[Math.floor(Math.random()*numeric.length)];
// }
// console.log(generatePassword(numeric));

// function generatePassword(letters)
// {
//   return letters[Math.floor(Math.random()*letters.length)];
// }
// console.log(generatePassword(letters));

// function generatePassword(special)
// {
//   return special[Math.floor(Math.random()*special.length)];
// }
// console.log(generatePassword(special));
// // Write password to the #password input
// function writePassword() {
//   
// var password = generatePassword();
//var passwordText = document.querySelector("#password");
//   passwordText.value = password;

// }



