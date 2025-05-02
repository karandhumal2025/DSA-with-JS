//8_left_rotation_by_1_element.js
// Problem: Rotate an array to the left by one position.
// Approach: Use a single loop to shift all elements of the array to the left by one position. Store the first element in a temporary variable, then iterate through the array, assigning each element to the previous index. Finally, assign the stored first element to the last index of the array. This approach ensures that we rotate the array in a single pass.

let arr = [1,2,3,4,5]
let copy = arr[0];
for(let i=0; i<arr.length-1; i++){
    arr[i]=arr[i+1];
}
arr[arr.length-1]=copy;
console.log(arr);

// Output: [2,3,4,5,1]  
// Explanation: The code uses a single loop to shift all elements of the array to the left by one position. It stores the first element in a temporary variable, then iterates through the array, assigning each element to the previous index. Finally, it assigns the stored first element to the last index of the array. The result is a left rotation of the array by one position.
// The time complexity of this algorithm is O(n), where n is the length of the array, as we are iterating through the array only once. The space complexity is O(1) since we are not using any additional data structures that grow with the input size.
// The space complexity is O(1) since we are not using any additional data structures that grow with the input size.