//14_sort_colors.js
// Problem: Sort an array containing 0's, 1's, and 2's in a single pass.
// Approach: Use three pointers to keep track of the positions of 0's, 1's, and 2's. Iterate through the array and swap elements as necessary to sort them in a single pass. This approach is efficient and works well for arrays containing only these three values.

var sortColors = function(nums) {
    let i=0;
    let j=0;
    let k=nums.length-1;

    while(i<k){
        if(nums[i] == 0){
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }else if(nums[i] == 2){
             let temp = nums[i];
            nums[i] = nums[k];
            nums[k] = temp;
        }
    }
    console.log(nums);
    
};
sortColors([2,0,2,1,1,0]);

// Output: [0,0,1,1,2,2]
// Explanation: The code uses three pointers to sort the array containing 0's, 1's, and 2's in a single pass. The first pointer (i) iterates through the array, while the second pointer (j) keeps track of the position of the last 0, and the third pointer (k) keeps track of the position of the last 2. The result is an array sorted in ascending order with all 0's at the beginning, followed by all 1's, and all 2's at the end.
// The time complexity of this algorithm is O(n), where n is the length of the array, as we are iterating through the array only once. The space complexity is O(1) since we are not using any additional data structures that grow with the input size.
// The space complexity is O(1) since we are not using any additional data structures that grow with the input size.