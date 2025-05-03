// right Rotation by 1 Element in an Array
// Problem: Rotate an array to the right by one position.
// Approach: Use a single loop to shift all elements of the array to the right by one position. Store the last element in a temporary variable, then iterate through the array in reverse order, assigning each element to the next index. Finally, assign the stored last element to the first index of the array. This approach ensures that we rotate the array in a single pass.
// Example: Given an array [1,2,3,4,5], the output should be [5,1,2,3,4].

let arr = [1,2,3,4,5]
let copy = arr[arr.length-1];
for(let i=arr.length-1; i>0; i--){
    arr[i]=arr[i-1]; 
    
}
arr[0]=copy;
console.log(arr);

// Output: [5,1,2,3,4]
// Explanation: The code uses a single loop to shift all elements of the array to the right by one position. It stores the last element in a temporary variable, then iterates through the array in reverse order, assigning each element to the next index. Finally, it assigns the stored last element to the first index of the array. The result is a right rotation of the array by one position.
// The time complexity of this algorithm is O(n), where n is the length of the array, as we are iterating through the array only once. The space complexity is O(1) since we are not using any additional data structures that grow with the input size.
// The space complexity is O(1) since we are not using any additional data structures that grow with the input size.
