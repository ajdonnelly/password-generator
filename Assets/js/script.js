
/*const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};
*/
var password = ""

// //function writePassword() {

//   //length is prompt 
//   function generatePassword(lower, upper, number, symbol, length) {

// 	let generatedPassword = '';
// 	const typesCount = lower + upper + number + symbol;
// 	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
// 	//how do add the results of the length prompt into here? its not true or false?
// 	// Doesn't have a selected type
// 	if(typesCount === 0) {
// 		return '';
// 	}
	
// 	// create a loop
// 	for(let i=0; i<length; i+=typesCount) {
// 		typesArr.forEach(type => {
// 			const funcName = Object.keys(type)[0];
// 			generatedPassword += randomFunc[funcName]();
// 		});
// 	}
	
// 	const finalPassword = generatedPassword.slice(0, length);
	
// 	return finalPassword;
// }

//this is the closing curly of writePassword
/*function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

/*function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}*/


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
  
  var usersChoice = []
  
  //instead of a prompt here, use a confirm. Then the answer is truthy or falsy. 
  
    var getUpper = window.confirm("Click OK to Use Upper Case Letters in Your Password and Cancel to exclude");
  if(getUpper) {
    password += getRandomUpper()
    //usersChoice.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    usersChoice = usersChoice.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(""))
  }
 
  
  //need some kind of statmeent that loops them back into the confirm if they don't answer correctly. this doesn't work
  //if (!getUpper) {
   // alert("You need to provide a valid answer! Please try again.");
  //  return getUpper();
  //}

 
  var getLower = window.confirm("Click OK to Use Lower Case Letters in Your Password and Cancel to exclude");
  if(getLower) {
    password += getRandomLower()
    //usersChoice.push('abcdefghijklmnopqrstuvwxyz')
    usersChoice = usersChoice.concat('abcdefghijklmnopqrstuvwxyz'.split(""))
  }
  

  var getNumber = window.confirm("Click OK to Use Numbers in Your Password and Cancel to exclude");
  if(getNumber) {
    password += getRandomNumber()
    //usersChoice.push('0123456789')
    usersChoice = usersChoice.concat('0123456789'.split(""))
  }

  var getSymbol = window.confirm("Click OK to Use Symbols in Your Password and Cancel to exclude");
  if(getSymbol) {
    password += getRandomSymbol()
    //usersChoice.push('!@#$%^&*(){}[]=<>/,.')
    usersChoice = usersChoice.concat('!@#$%^&*(){}[]=<>/,.'.split(""))
  }


  //i don't think this is right. 
  /*while (true) {*/
    for (index = 0; index <= complexity; index++) {
    password += usersChoice[Math.floor(Math.random() * Math.floor(usersChoice.length - 1))];
    
    //continue;
  
  //}

  //}

  //while (password.length <= complexity){
  //password += usersChoice[Math.floor(Math.random() * usersChoice.length)]
  //}
  
  // if user picks "skip" confirm and then stop the loop
 //     getRandomUpper = getRandomUpper.toLowerCase();

  //this is truthy falsy-this is an if statment that identifies if it is faslse, rather than if it true and false
  //Conditional Recursive Function Call
 
  //console.log ();
  /*
  if(getRandomUpper === no) {
		return '';
  }
  else(getRandomUpper === yes) 
    return getRandomUpper;
  */
  
  //lower prompt

  //numbers prompt
  //symbols prompt
 
  //var complexity = window.prompt("Password Length? Enter a number between 8 and 128");
  
  //set values of characters
  //let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!()&*+,\-./%:#];<=>?@[^$_`{|}~";
  
  //set password variable
  //let password = "";

  //for loop runs actual password generation based on prompt repsonse
  //for (var i = 0; i <= complexity; i++) { 
    var passwordText = document.querySelector("#password");

    passwordText.innerHTML = password;  
  //password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));  
  }
}
  
   
  

//}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);