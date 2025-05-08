//13_merge_sorted_array.js
// Problem: Merge two sorted arrays into one sorted array.
// Approach: Use two pointers to keep track of the current index in each array. Compare the elements at these indices and place the smaller element into the merged array. Continue this process until all elements from both arrays are merged.

function merge(nums1, m, nums2, n) {
    let p1 = m - 1;     
    let p2 = n - 1; 
    let p = m + n - 1;  

    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
    console.log(nums1);
}
merge([1,2,3,0,0,0], 3, [2,5,6], 3);

// Output: [1,2,2,3,5,6]
// Explanation: The code uses two pointers to merge two sorted arrays into one sorted array. The first pointer (p1) starts at the end of the first array, and the second pointer (p2) starts at the end of the second array. The third pointer (p) starts at the end of the merged array. The code compares the elements at p1 and p2, placing the larger element into the merged array and moving the pointers accordingly. Finally, if there are any remaining elements in nums2, they are copied into nums1.
// The result is a merged sorted array containing all elements from both input arrays in sorted order.
// The time complexity of this algorithm is O(m + n), where m and n are the lengths of the two input arrays, as we are iterating through both arrays only once. The space complexity is O(1) since we are not using any additional data structures that grow with the input size.
// The space complexity is O(1) since we are not using any additional data structures that grow with the input size.