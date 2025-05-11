//15_maximum_subarray.js
// Problem: Find the maximum sum of a contiguous subarray in an array of integers.
// Approach: Use Kadane's algorithm, which iterates through the array while maintaining the maximum sum of the subarray ending at each position. This approach is efficient and works well for both positive and negative integers in the array.

var maxSubArray = function(nums) {
    let max = -Infinity;
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        sum+=nums[i]
        max= Math.max(max,sum)
        if(sum<0) sum=0;
    }
    return max; 
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

// Output: 6
// Explanation: The code uses Kadane's algorithm to find the maximum sum of a contiguous subarray in the given array. It initializes two variables, max and sum, to keep track of the maximum sum found so far and the current sum of the subarray respectively. As it iterates through the array, it updates these variables based on the current element. The result is the maximum sum of a contiguous subarray in the array.
// The time complexity of this algorithm is O(n), where n is the length of the array, as we are iterating through the array only once. The space complexity is O(1) since we are not using any additional data structures that grow with the input size.
// The space complexity is O(1) since we are not using any additional data structures that grow with the input size.