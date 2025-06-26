// Binary Search Algorithm using Recursion
// Time Complexity: O(log n)    
// Space Complexity: O(1)

let arr = [2, 3, 4, 10, 40, 50, 60, 70, 80, 90];
let index = binarySearch(arr, 0, arr.length - 1, 3); // should return 6
if (index !== -1) {
    console.log("Element found at index:", index);
} else {
    console.log("Element not found");
}

function binarySearch(arr, f , l , target) {
    if (l >= f) {
        let mid = Math.floor((f + l) / 2);
        
        // Check if the target is present at mid
        if (arr[mid] === target) {
            return mid; // Target found, return index
        }
        
        // If target is smaller than mid, search in the left half
        if (arr[mid] > target) {
            return binarySearch(arr, f, mid - 1, target);
        }
        
        // If target is larger than mid, search in the right half
        return binarySearch(arr, mid + 1, l, target);
    }
    
    return -1; // Target not found
}