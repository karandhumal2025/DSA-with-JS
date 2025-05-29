// Bubble Sort Algorithm
// Time Complexity: O(n^2)

let arr = [10,30,56,43,29,64,44,60]
let n = arr.length;
let i, j;

for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }   
}

console.log("Sorted array:", arr);