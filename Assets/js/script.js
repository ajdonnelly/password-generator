
//Declaring open global variable password
var password = ""

//Creating randomizing functions to generate characters for password

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'.split("");
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function getRandomUpper() {
	const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
	return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getRandomLower() {
	const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split("");
	return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getRandomNumber() {
	const nums = '0123456789'.split("");
	return nums[Math.floor(Math.random() * nums.length)];
}

  // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //key length set for between 8 and 128 chararcters by user through prompt
 
  var complexity = window.prompt("Password Length? Enter a number between 8 and 128");
  if (complexity === "" || complexity === null || complexity <8 || complexity >128) {
    alert("You need to provide a valid answer! Please try again.");
   return writePassword();
  }
  
  //declaring variable userChoice as an open array to be pushed to
  var usersChoice = []
  
  //Using confirms, allow user to include or exclude character types in password 
  //Confirm uppercase letter characters
  var getUpper = window.confirm("Click OK to Use Upper Case Letters in Your Password and Cancel to exclude");
  if(getUpper) {
    password += getRandomUpper()
    usersChoice = usersChoice.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(""))
    }

  //Confirm lowercase letter characters
  var getLower = window.confirm("Click OK to Use Lower Case Letters in Your Password and Cancel to exclude");
  if(getLower) {
    password += getRandomLower()
    usersChoice = usersChoice.concat('abcdefghijklmnopqrstuvwxyz'.split(""))
  }
  
  //Confirm number characters
  var getNumber = window.confirm("Click OK to Use Numbers in Your Password and Cancel to exclude");
  if(getNumber) {
    password += getRandomNumber()
    usersChoice = usersChoice.concat('0123456789'.split(""))
  }

  //Confirm symbol characters
  var getSymbol = window.confirm("Click OK to Use Symbols in Your Password and Cancel to exclude");
  if(getSymbol) {
    password += getRandomSymbol()
    usersChoice = usersChoice.concat('!@#$%^&*(){}[]=<>/,.'.split(""))
  }

  //Create for loop to run through characters and output password

    for (index = 0; index <= complexity; index++) {
    password += usersChoice[Math.floor(Math.random() * Math.floor(usersChoice.length - 1))];

    //Find text area to write password to on screen
    var passwordText = document.querySelector("#password");

    //Write password to screen via innerHTML
    passwordText.innerHTML = password;  
  
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);