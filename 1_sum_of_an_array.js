//1_sum_of_an_array.js
// Problem: Calculate the sum of all elements in an array.
// Approach: Use a loop to iterate through the array and accumulate the sum of its elements. This approach ensures that we traverse the array only once, making it efficient for large arrays.
// Example: Given an array [10, 20, 30, 40, 50], the output should be 150.

let arr = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum); 

// Output: 150
// Explanation: The code uses a loop to iterate through the array and accumulate the sum of its elements. It initializes a variable `sum` to 0 and adds each element of the array to this variable. The final value of `sum` is printed, which is the total sum of all elements in the array.
// The time complexity of this algorithm is O(n), where n is the length of the array, as we are iterating through the array only once. The space complexity is O(1) since we are not using any additional data structures that grow with the input size.
// The space complexity is O(1) since we are not using any additional data structures that grow with the input size.
