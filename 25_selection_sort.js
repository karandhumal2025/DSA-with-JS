// Selection Sort Algorithm
// Time Complexity: O(n^2)
// Space Complexity: O(1)

let arr = [10, 30, 56, 43, 29, 64, 44, 60];
let n = arr.length;

for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }
        if (minIndex !== i) {
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
    }
}

console.log("Sorted array:", arr);
// Output: Sorted array: [ 10, 29, 30, 43, 44, 56, 60, 64 ]