// 22_toggle_each_character.js
// problem: Toggle the case of each character in a string
// approach: Use charCodeAt() to get the ASCII value of each character and add/subtract 32 to toggle the case

let s = prompt("Enter a string: ");
console.log("Original string: " + s);

let toggleString = "";
for (let i = 0; i < s.length-1; i++) {
    let char = s.charCodeAt(i);

    if (char >= 65 && char <= 90) {
        toggleString += String.fromCharCode(char + 32);
    }
    else if (char >= 97 && char <= 122) {
        toggleString += String.fromCharCode(char - 32);
   
    }  
}
console.log("Toggled string: " + toggleString); 

// Example Input: "Hello World"
// Example Output: "hELLO wORLD"
// explanation: The program takes a string as input and toggles the case of each character. It uses the charCodeAt() method to get the ASCII value of each character and then adds or subtracts 32 to toggle the case. The resulting toggled string is printed to the console.
// The time complexity of this algorithm is O(n), where n is the length of the string, as we are iterating through each character once.
// The space complexity is O(n) as well, since we are creating a new string to store the toggled characters.