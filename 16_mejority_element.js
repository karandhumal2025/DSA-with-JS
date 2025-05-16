//16_mejority_element.js
// Problem: Find the majority element in an array of integers, where the majority element is the element that appears more than n/2 times in the array.
// Approach: Use the Boyer-Moore Voting Algorithm, which maintains a candidate for the majority element and a count of how many times it has been seen. If the count reaches zero, it updates the candidate to the current element and resets the count to 1. This approach is efficient and works well for arrays with a guaranteed majority element.

var majorityElement = function(nums) {
    let ans = nums[0];
    let count = 1;

    for(i=0;i<nums.length;i++){
        if(count == 0){
            ans = nums[i];
            count=1;  
        }else if(ans == nums[i]) count++;
        else count--;
    }
    return ans;
};
console.log(majorityElement([2,2,1,1,1,2,2]));

// Output: 2
// Explanation: The code uses the Boyer-Moore Voting Algorithm to find the majority element in the given array. It initializes two variables, ans and count, to keep track of the current candidate for the majority element and its count respectively. As it iterates through the array, it updates these variables based on the current element. The result is the majority element in the array, which is guaranteed to exist according to the problem statement.
// The time complexity of this algorithm is O(n), where n is the length of the array, as we are iterating through the array only once. The space complexity is O(1) since we are not using any additional data structures that grow with the input size.    
// The space complexity is O(1) since we are not using any additional data structures that grow with the input size.