// 23_string_charector_count.js
// problem: Count the number of occurrences of each character in a string
// approach: Use an array of size 128 to store the count of each character

let s = "aaabbcddddd";
let arr = new Array(128).fill(0);

for (let i = 0; i < s.length; i++) {
    let indx = s.charCodeAt(i);
    arr[indx]++;
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        console.log(String.fromCharCode(i) + " : " + arr[i]);
    }
}

// output
// a : 3
// b : 2
// c : 1
// d : 5

// explanation: The code counts the number of occurrences of each character in the string "aaabbcddddd". It uses an array of size 128 to store the count of each character based on its ASCII value. The first loop iterates through the string and increments the count for each character. The second loop prints the characters and their counts. The time complexity is O(n), where n is the length of the string, and the space complexity is O(1) since the size of the array is constant (128).
// The time complexity is O(n), where n is the length of the string, and the space complexity is O(1) since the size of the array is constant (128).
// The space complexity is O(1) since the size of the array is constant (128).