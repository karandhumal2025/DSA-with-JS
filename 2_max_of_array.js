//2_max_of_array.js
//problem: Find the maximum element in an array.
// Approach: Initialize a variable to hold the maximum value. Iterate through the array, updating this variable whenever a larger element is found. This approach ensures that we find the maximum element in a single pass through the array.

let arr = [10, 24, 30, 44, 56, 64, 43, 29, 60];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);

// Output: 64
// Explanation: The code uses a loop to iterate through the array and find the maximum element. It initializes a variable `max` to the first element of the array and updates it whenever a larger element is found. The final value of `max` is printed, which is the maximum element in the array.
// The time complexity of this algorithm is O(n), where n is the length of the array, as we are iterating through the array only once. The space complexity is O(1) since we are not using any additional data structures that grow with the input size.    
// the space complexity is O(1) since we are not using any additional data structures that grow with the input size.
