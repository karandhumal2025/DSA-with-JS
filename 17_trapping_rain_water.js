//17_trapping_rain_water.js
// Problem: Given an array of non-negative integers representing the height of bars, calculate how much water can be trapped after raining.
// Approach: Use two auxiliary arrays to store the maximum heights to the left and right of each bar. For each bar, calculate the amount of water that can be trapped by taking the minimum of the left and right heights minus the height of the current bar. The final answer is the sum of all these values.

var trap = function(height) {
    let left = new Array(height.length);
    let right = new Array(height.length);
    let maxleft = height[0], maxright = height[height.length-1];
    left[0] = maxleft , right[right.length-1] = maxright;

    for(let i=1;i<height.length;i++){
        maxleft = Math.max(height[i],maxleft);
        left[i] = maxleft;
    }
    for(let i=height.length-2;i>=0;i--){
        maxright = Math.max(height[i],maxright);
        right[i] = maxright;
    }
    let ans =0;
    for(let i=0;i<height.length;i++){
        ans += Math.min(left[i],right[i])-height[i];
    }
    return ans;
    
};
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));

// Output: 6
// Explanation: The code calculates the amount of water that can be trapped between the bars represented by the height array. It uses two auxiliary arrays, left and right, to store the maximum heights to the left and right of each bar respectively. The final answer is calculated by iterating through the height array and summing up the minimum of the left and right heights minus the height of the current bar. The result is the total amount of water that can be trapped.
// The time complexity of this algorithm is O(n), where n is the length of the height array, as we are iterating through the array a constant number of times. The space complexity is O(n) due to the use of the left and right arrays, which store the maximum heights to the left and right of each bar respectively. However, we can optimize the space complexity to O(1) by using two pointers instead of auxiliary arrays.
// The space complexity is O(n) due to the use of the left and right arrays, which store the maximum heights to the left and right of each bar respectively. However, we can optimize the space complexity to O(1) by using two pointers instead of auxiliary arrays.