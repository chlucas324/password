// click generate password- click event
// select different criteria for password
// choose length of characters (8-128)- function input number
// choose character types (lowercase, uppercase, numeric, special characters) function input
// input validated- one character type selected- boolean?
// displayed as an alert or written on page- create alert

// Assignment code here
var generateBtn = document.querySelector("#generate")
var passwordText = document.querySelector("#password");
generateBtn.addEventListener('click', writePassword);

// Arrays
var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "10123456789";
var special = "!#$%&'()*+,-./:;<=>?@[/]^_`{|}~";

// confirm variables
var passwordLength = "";
var confirmLetters;
var confirmNumeric;
var confirmSpecial;



// Add event listener to generate button
// 


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
//   passwordText.value = password;

// }



