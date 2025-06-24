// Binary Search Algorithm
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
    while (l >= f) {
        let mid = Math.floor((f + l) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] > target)   l == mid - 1;
         else f = mid + 1;
    }
    return -1;
}