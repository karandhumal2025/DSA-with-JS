    // 7_homewok_two_point_algo_using_+ve_and_-ve_values.js
    // Problem: Move all negative numbers to the end of the array while maintaining the order of non-negative elements.
    // Approach: Use two pointers, one for iterating through the array and another for tracking the position of the last non-negative element.

    let arr = [1, 2, -1, 3,0, -2, 4, 5, -3, -4];
    let i=0;
    let j=0;

    while(i<arr.length ){
        if(arr[i] >= 0){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;    
        }
        i++;
    }
    console.log(arr);
    
    // Output: [1, 2, 3, 0, 4, 5, -1, -2, -3, -4]
    // Explanation: The code uses two pointers to rearrange the array such that all non-negative numbers are moved to the front while maintaining their order.
    // The first pointer (i) iterates through the array, while the second pointer (j) keeps track of the position of the last non-negative element.
    // The result is an array where all non-negative numbers are at the beginning, followed by all negative numbers.
    // The time complexity of this algorithm is O(n), where n is the length of the array, as we are iterating through the array only once.
    // The space complexity is O(1) since we are not using any additional data structures that grow with the input size.