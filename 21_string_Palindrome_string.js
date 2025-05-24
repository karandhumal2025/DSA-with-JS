//21_string_Palindrome_string.js
// Problem: Check if a string is a palindrome
// Approach: Convert the string to lowercase and remove non-alphanumeric characters. Then, check if the string is equal to its reverse. If it is, return true; otherwise, return false.

var isPalindrome = function(str) {
        let ispalindrome = true;
         let i=0; j=str.length-1;
    while(i<j){
        if(str[i] != str[j]) {
             ispalindrome=false;
            break
        }
            i++;
            j--;
    }
  return ispalindrome;
}
console.log(isPalindrome("madam")); //output: true
console.log(isPalindrome("hello")); //output: false

//explanation: The function checks if the string "madam" is a palindrome by comparing it with its reverse. Since "madam" is equal to its reverse, the function returns true. For the string "hello", it returns false as it is not a palindrome.
// The time complexity of this algorithm is O(n), where n is the length of the string, as we are iterating through the characters only once.
// The space complexity is O(1) since we are not using any additional data structures that grow with the input size.

