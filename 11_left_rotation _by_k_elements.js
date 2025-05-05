//11_left_rotation%20_by_k_elements.js
// Problem: Rotate an array to the left by k positions.
// Approach: Use a loop to perform the left rotation k times. In each iteration, store the first element in a temporary variable, then iterate through the array, assigning each element to the previous index. Finally, assign the stored first element to the last index of the array. This approach ensures that we rotate the array in k passes.

let arr = [1, 2, 3, 4, 5];
let k = 2;                                           // number of rotations
k = k % arr.length;                             // Handle cases where k is greater than the length of the array 

for (let j = 0; j < k; j++) {
  let copy = arr[0];                                 // Store the first element in a temporary variable
  for (let i = 0 ; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = copy;
}
console.log(arr);

// Output: [3, 4, 5, 1, 2]
// Explanation: The code uses a loop to perform the left rotation k times. In each iteration, it stores the first element in a temporary variable, then iterates through the array, assigning each element to the previous index. Finally, it assigns the stored first element to the last index of the array. The result is a left rotation of the array by k positions.
// The time complexity of this algorithm is O(n*k), where n is the length of the array and k is the number of rotations, as we are iterating through the array k times. The space complexity is O(1) since we are not using any additional data structures that grow with the input size.
// The space complexity is O(1) since we are not using any additional data structures that grow with the input size.

