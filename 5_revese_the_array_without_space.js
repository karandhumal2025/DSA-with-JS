// 5_reverse_the_array_without_space.js
// Problem: Reverse the array without using any extra space.
// Approach: Use two pointers, one starting from the beginning and the other from the end of the array. Swap the elements at these pointers and move them towards the center.
// This approach effectively reverses the array in place without using any additional space.

let arr = [10, 20, 30, 40, 50];
let i = 0;
let j = arr.length - 1;

while (i != j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}
console.log(arr);

// Output: [50, 40, 30, 20, 10]
// Explanation: The code uses two pointers to reverse the array in place. The first pointer (i) starts from the beginning of the array, while the second pointer (j) starts from the end.
// The elements at these pointers are swapped, and the pointers are moved towards the center until they meet. This results in the array being reversed without using any extra space.
// The time complexity of this algorithm is O(n), where n is the length of the array, as we are iterating through the array only once. The space complexity is O(1) since we are not using any additional data structures that grow with the input size.
// the space complexity is O(1) since we are not using any additional data structures that grow with the input size.