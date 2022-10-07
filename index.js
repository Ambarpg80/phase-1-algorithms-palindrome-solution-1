function isPalindrome(word) {
  //Write your algorithm here
  // const wordArray = word.split('');
  // const reversedWordArray = wordArray.reverse();
  // const reversedWord = reversedWordArray.join('');
  //  return word === reversedWord
  return word === word.split('').reverse().join('');

}

/* 
  Add your pseudocode here
  //If the word is the same in reverse I should return true.

//Reverse the input string
//If the input is the same as the reversed input
   //return true
 //else 
  // return false
*/

/*
  Add written explanation of your solution here 
  Write a function that results in a boolean return after checking if a word is the same spelled forwards as it is spelled backwards.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("tambor"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("jffj"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
