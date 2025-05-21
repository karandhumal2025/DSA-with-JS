//18_trapping_rain_water_Optimized_Code (Two-pointer Approach)
// Problem: Given an array of non-negative integers representing the height of bars, calculate how much water can be trapped after raining.
// Approach: Use a two-pointer approach to calculate the amount of water that can be trapped. Initialize two pointers, left and right, at the beginning and end of the array respectively. Maintain two variables to keep track of the maximum heights to the left and right of the pointers. Iterate through the array until the two pointers meet, updating the maximum heights and calculating the water trapped at each position based on the minimum of the left and right maximum heights. The final answer is the total amount of water that can be trapped.

var trap = function(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let waterTrapped = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                waterTrapped += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                waterTrapped += rightMax - height[right];
            }
            right--;
        }
    }

    return waterTrapped;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));

// Output: 6
// Explanation: The code calculates the amount of water that can be trapped between the bars represented by the height array using a two-pointer approach. It maintains two pointers, left and right, which start at the beginning and end of the array respectively. It also keeps track of the maximum heights to the left and right of the pointers. The final answer is calculated by iterating through the height array and summing up the water trapped at each position based on the minimum of the left and right maximum heights. The result is the total amount of water that can be trapped.
// The time complexity of this algorithm is O(n), where n is the length of the height array, as we are iterating through the array a constant number of times. The space complexity is O(1) since we are using only a constant amount of extra space for the left and right pointers and the maximum heights.
// the space complexity is O(1) since we are using only a constant amount of extra space for the left and right pointers and the maximum heights.