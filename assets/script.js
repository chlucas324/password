// define variables for password parameters
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

// confirm variables
var passwordLength = "";
var confirmLowercaseLetters;
var confirmUppercaseLetters;
var confirmNumeric;
var confirmSpecial;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate")

// write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
  
passwordText.value = password;


// prompt to confirm password length (# of characters)
function generatePassword() {

var password = "";
var characters = ""; 

// prompt to ask how many characters in password
var passwordLength = prompt("How many characters would you like your password?");
while(passwordLength < 8 || passwordLength > 128) passwordLength = prompt("Length must be between 8 and 128 characters. Try again.");

// confirm for lowercase letters
var confirmLowercaseLetters = confirm("Would you like to use lowercase letters?");

if (confirmLowercaseLetters) {
characters += lowercaseLetters;
}

// confirm for uppercase letters
var confirmUppercaseLetters = confirm("Would you like to use uppercase letters?");

if (confirmUppercaseLetters) {
  characters += uppercaseLetters;
}

// confirm for numbers
var confirmNumeric = confirm("Would you like to use numbers?");

if (confirmNumeric) {
  characters += numeric;
}

// confirm for special characters
var confirmSpecial = confirm("Would you like to use special characters?");

if (confirmSpecial) {
  characters += special;
}

// must select one character type parameter
while (!(confirmLowercaseLetters|| confirmUppercaseLetters || confirmNumeric || confirmSpecial)){ 
  alert("You must select at least one character type.");
  return generatePassword()};

// concatenate password based on set parameters
for (var i = 0; i < passwordLength; i++) {
  password += characters.charAt(Math.floor(Math.random() * characters.length));
}
document.getElementById("password").value = password;
return password;
}
};

// add event listener to generate button
generateBtn.addEventListener('click', writePassword);