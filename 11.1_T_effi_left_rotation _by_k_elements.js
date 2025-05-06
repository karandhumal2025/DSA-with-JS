// 11.1_effi_left_rotation%20_by_k_elements.js
// // Problem: Rotate an array to the left by k positions efficiently.
// // Approach: Use a temporary array to store the rotated elements. Calculate the effective number of rotations needed by taking the modulo of k with the length of the array. Then, iterate through the original array and assign each element to its new position in the temporary array. Finally, copy the elements from the temporary array back to the original array. This approach ensures that we rotate the array in a single pass and uses O(n) space for the temporary array.

let arr = [1, 2, 3, 4, 5];
let temp = new Array(arr.length);                
let k = 2;           // number of rotations
k = k % arr.length;                             

  for (let i = 0 ; i < arr.length; i++) {
    temp[i] = arr[(i+k)%arr.length];  
  }
 console.log(temp);

 // Output: [3, 4, 5, 1, 2]
// // Explanation: The code uses a temporary array to store the rotated elements. It calculates the effective number of rotations needed by taking the modulo of k with the length of the array. Then, it iterates through the original array and assigns each element to its new position in the temporary array. Finally, it copies the elements from the temporary array back to the original array. The result is a left rotation of the array by k positions.
// // The time complexity of this algorithm is O(n), where n is the length of the array, as we are iterating through the array only once. The space complexity is O(n) since we are using a temporary array to store the rotated elements. This approach is more efficient than the previous one, which had a time complexity of O(n*k).
// // The space complexity is O(n) since we are using a temporary array to store the rotated elements.