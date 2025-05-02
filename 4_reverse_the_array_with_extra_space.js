    // 4_reverse_the_array_with_extra_space.js
    // Problem: Reverse the array using extra space.
    // Approach: Create a temporary array of the same size as the original array. Iterate through the original array from the last element to the first, and copy these elements into the temporary array. Finally, return the temporary array as the reversed array.
    // This approach uses extra space to store the reversed elements, which is why it is different from the in-place reversal method.

    let arr = [10, 20, 30, 40, 50];
    let temp = new Array(arr.length);
    let j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        temp[j] = arr[i];
        j++;
        console.log(temp);
    }

    // Output: [50, 40, 30, 20, 10]
    // Explanation: The code uses a temporary array to store the elements of the original array in reverse order. The first loop iterates through the original array from the last element to the first, and the second loop copies these elements into the temporary array. The result is a new array that contains the elements of the original array in reverse order.
    // The time complexity of this algorithm is O(n), where n is the length of the array, as we are iterating through the array only once. The space complexity is O(n) since we are using an additional array to store the reversed elements.
    // The space complexity is O(n) since we are using an additional array to store the reversed elements.
