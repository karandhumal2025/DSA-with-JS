// Insertion Sort Algorithm
// Time Complexity: O(n^2)
// Space Complexity: O(1)

let arr = [10, 30, 56, 43, 29, 64, 44, 60];
let n = arr.length;

function insertionSort(arr, n) {
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

console.log(insertionSort(arr, n));