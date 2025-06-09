// Problem: Find all divisors of a number in sorted order
// Approach: Iterate from 1 to the square root of the number and check if it divides the number 
// time complexity: O(sqrt(n))
// space complexity: O(1)

let n = 100;

// First loop: print smaller divisors (up to sqrt(n))
for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i == 0) {
        process.stdout.write(i + " ");
    }
}

// Second loop: print corresponding larger divisors in reverse order
for (let i = Math.floor(Math.sqrt(n)); i >= 1; i--) {
    if (n % i == 0) {
        if (n / i != i) {
            process.stdout.write(n / i + " ");
        }
    }
}
