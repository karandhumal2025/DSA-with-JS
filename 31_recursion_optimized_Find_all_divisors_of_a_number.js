// Problem: Find all divisors of a number in sorted order with recursion
// Approach: Use recursion to find and print divisors
// Time Complexity: O(sqrt(n))  
// Space Complexity: O(sqrt(n)) for recursion stack

function printDivisorsRecursive(n) {
    const sqrtN = Math.floor(Math.sqrt(n));

    // First recursive pass: print smaller divisors (1 to √n)
    function printSmaller(i) {
        if (i > sqrtN) return;
        if (n % i === 0) {
            process.stdout.write(i + " ");
        }
        printSmaller(i + 1);
    }

    // Second recursive pass: print larger divisors (√n to 1)
    function printLarger(i) {
        if (i < 1) return;
        if (n % i === 0 && n / i !== i) {
            process.stdout.write((n / i) + " ");
        }
        printLarger(i - 1);
    }

    printSmaller(1);
    printLarger(sqrtN);
}

printDivisorsRecursive(100);  
// Output: 1 2 4 5 10 20 25 50 100
