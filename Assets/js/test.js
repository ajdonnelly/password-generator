

var title=document.createElement("h1")
var subTitle=document.createElement("h2")
var image=document.createElement("img")

var ol=document.createElement("ol")

var tableTitle=document.createElement("h3")

var body=document.tagname



















/*function countVowelConsonant(inputstring) {
    //score here is the output variable. you have to start it at 0. otherwise it is undefined.
    var score=0
    //you need a for loop to compare each letter in the 26 letter alphabet against the string of "aeiou"
    for (var i=0; i <inputString.length; i++){
        //this if is if it finds a vowel which gets 1 points
        if ("aeiou".indexOf(inputString.charAt(i))>=0)
            score++
    }

    //or else, you find a consonant and add 2 points
    else{
        score +=2;
    }
}
//all that is left is to run the score variable 
return score; 


Example
For s = "a", the output should be
countVowelConsonant(s) = 1;
For s = "abcde", the output should be
countVowelConsonant(s) = 8.

The letters in s, converted to 1s and 2s and added together as described above: 1 + 2 + 2 + 2 + 1 = 8.
Input/Output
[execution time limit] 4 seconds (js)
[input] string s
A string consisting only of lowercase English letters.
Guaranteed constraints:
0 ≤ s.length ≤ 104.
[output] integer