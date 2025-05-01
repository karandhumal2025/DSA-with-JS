// 3_2nd_max.js
// Problem: Find the second maximum element in an array.
// Approach: Initialize two variables to hold the maximum and second maximum values. Iterate through the array, updating these variables as necessary. This approach ensures that we find the second maximum element in a single pass through the array.
// This approach is efficient and works well for arrays with distinct elements. If the array contains duplicate elements, we need to ensure that the second maximum is different from the maximum.

let arr = [10,30,56,43,29,64,44,60]

let max = Math.max(arr[0],arr[1]);
let smax = Math.min(arr[0],arr[1]);

for(let i=2; i<arr.length; i++){
    if(arr[i]>max){
        smax=max;
        max=arr[i];
    }else if(arr[i]>smax && max!=arr[i]){
        smax=arr[i];
    }
    
}
console.log(smax);

// Output: 64
// Explanation: The code uses a single loop to find the second maximum element in the array. It initializes two variables, max and smax, to hold the maximum and second maximum values respectively. As it iterates through the array, it updates these variables based on the current element. The result is the second maximum element in the array. 
// The time complexity of this algorithm is O(n), where n is the length of the array, as we are iterating through the array only once. The space complexity is O(1) since we are not using any additional data structures that grow with the input size.
// The space complexity is O(1) since we are not using any additional data structures that grow with the input size.
