
  // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    
  //key length set for between 8 and 128 chararcters by user through prompt
 
  var complexity = window.prompt("Password Length? Enter a number between 8 and 128");
  
  //set values of characters
  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!()&*+,\-./%:#];<=>?@[^$_`{|}~";
  
  //set password variable
  let password = "";

  //for loop runs actual password generation based on prompt repsonse
    for (var i = 0; i <= complexity; i++) { 
    
      password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));  
    }
  
    
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

