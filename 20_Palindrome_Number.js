//20_Palindrome_Number.js
// Problem: Given an integer x, return true if x is a palindrome, and false otherwise.
// Approach: Convert the integer to a string and check if it is equal to its reverse. If it is, return true; otherwise, return false.

var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
        let ispalindrome = true;
        let str = x.toString();
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
console.log(isPalindrome(121));

//output: true
// Explanation: The function checks if the integer 121 is a palindrome by converting it to a string and comparing it with its reverse. Since 121 is equal to its reverse, the function returns true.
// The time complexity of this algorithm is O(n), where n is the number of digits in the integer, as we are iterating through the digits only once.
// The space complexity is O(1) since we are not using any additional data structures that grow with the input size.
