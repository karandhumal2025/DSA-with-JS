// Problem: Find all divisors of a number
// Approach: Iterate from 1 to the square root of the number and check if it divides the number
// Time Complexity: O(sqrt(n))
// Space Complexity: O(1)

let n = 30;

for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
        process.stdout.write(i + " ");
        if (n / i !== i) {
            process.stdout.write(n / i + " ");
        }
    }
}
