function isPalindrome(word) {
 
  // Write your algorithm here
  /* Writting down the words which are palendrome
  function declaration of isPalindrome
  input two strings and return a boolean for palendrome words and which is not
  log the return values to the console
 */
  return word;
}
function reverseString(word) {
  return word.split("").reverse().join("");}
  function isPalindrome(word) {
    // reverse the input string
    const reversedWord = reverseString(word);
    // compare the reversed string to the input
    return word === reversedWord;
  }

/* 
  Add your pseudocode here
  palindrome(“racecare”) should return true
palindrome(“robot”) should return false
function isPalindrome should return Expected result
*/

/*
  Add written explanation of your solution here
  palidrome is any word that can read from both ends
  racecare is a palidrome because it can be read from both sides
  robot can only be read from one side so it is not a palindrome
  function isPalindrome is used to declare words which are palindrome and returns boolean in comparison with which are not
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");


  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");



  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
