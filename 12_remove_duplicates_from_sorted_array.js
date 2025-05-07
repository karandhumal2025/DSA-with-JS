//12_remove_duplicates_from_sorted_array.js
// Problem: Remove duplicates from a sorted array in-place and return the new length of the array.
// Approach: Use a two-pointer technique to iterate through the array. The first pointer keeps track of the current unique element, while the second pointer iterates through the array. If the current element is different from the last unique element, it is added to the unique elements list. This approach modifies the original array in-place and returns the new length of the array without duplicates.

var removeDuplicates = function(nums) {
    let j = 1 ;
    for(let i = 0; i<nums.length-1; i++){
        if(nums[i] != nums[i+1]){
            nums[j] = nums[i+1]
            j++
        }
    }
return j;
    
};
let nums = [1,1,2,3,4,5,5,6,7,8,8,9];
let k = removeDuplicates(nums);
console.log(nums.slice(0, k));

// Output: [1,2,3,4,5,6,7,8,9]
// Explanation: The code uses a two-pointer technique to remove duplicates from a sorted array in-place. The first pointer (i) iterates through the array, while the second pointer (j) keeps track of the position of the last unique element. The result is an array with all unique elements at the beginning, and the length of the array is returned as the new length without duplicates.
// The time complexity of this algorithm is O(n), where n is the length of the array, as we are iterating through the array only once. The space complexity is O(1) since we are not using any additional data structures that grow with the input size.
// The space complexity is O(1) since we are not using any additional data structures that grow with the input size.

