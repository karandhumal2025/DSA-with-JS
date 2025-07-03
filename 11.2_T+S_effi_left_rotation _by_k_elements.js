//11.2_T+S_effi_left_rotation%20_by_k_elements.js
// Problem: Rotate an array to the left by k positions efficiently using the reverse method.
// Approach: Use the reverse method to rotate the array. First, reverse the first k elements, then reverse the remaining elements, and finally reverse the entire array. This approach ensures that we rotate the array in a single pass and uses O(1) space for the temporary array.

let arr = [1, 2, 3, 4, 5];               
let k = 2;           // number of rotations
k = k % arr.length;                             

reverse(0, k-1);                // Reverse the first k elements
reverse(k, arr.length-1);        // Reverse the remaining elements
reverse(0, arr.length-1);        // Reverse the entire array

// The final array is the left rotated array    

 function reverse(i, j) {
   while (i < j) {
    [ arr[i] , arr[j] ] = [ arr[j] , arr[i] ];
     i++; 
     j--;
   }
   
 }
 console.log(arr);

// Output: [3, 4, 5, 1, 2]
// Explanation: The code uses the reverse method to rotate the array. It first reverses the first k elements, then reverses the remaining elements, and finally reverses the entire array. The result is a left rotation of the array by k positions.
// The time complexity of this algorithm is O(n), where n is the length of the array, as we are iterating through the array only once. The space complexity is O(1) since we are not using any additional data structures that grow with the input size. This approach is more efficient than the previous one, which had a time complexity of O(n*k).
// The space complexity is O(1) since we are not using any additional data structures that grow with the input size.
// The final array is the left rotated array
