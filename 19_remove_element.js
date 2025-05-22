// 19_remove_element.js
// Problem: Given an array nums and a value val, remove all instances of that value in-place and return the new length. Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
// Approach: Use two pointers, one for iterating through the array and another for tracking the position of the last non-val element. When a non-val element is found, it is moved to the position of the last non-val element, and the last non-val position is incremented.

var removeElement = function(nums, val) {
    let k=0;
    
         for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                nums[k] = nums[i];
                k++;
            }
         }
        return (k, nums.slice(0, k));
    };
console.log(removeElement([3,2,2,3], 3)); 

// Output: 2, nums = [2,2]
// Explanation: The function modifies the input array in-place to remove all instances of the value 3, resulting in a new length of 2 and the modified array being [2,2].
// The time complexity of this algorithm is O(n), where n is the length of the array, as we are iterating through the array only once.
// The space complexity is O(1) since we are not using any additional data structures that grow with the input size.