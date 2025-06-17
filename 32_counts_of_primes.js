// 32_counts_of_primes.js
// sleuth sieve of Eratosthenes to count and list prime numbers up to n
// time complexity: O(n log log n)
// space complexity: O(n)

let n=30;
let arr = new Array(n+1).fill(true);
arr[0] = arr[1] = false; // 0 and 1 are not prime numbers

for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (arr[i]) {
        for (let j = i * i; j <= n; j += i) {
            arr[j] = false;
        }
    }
}

let primeCount = arr.filter(Boolean).length;
console.log(`Count of prime numbers up to ${n}: ${primeCount}`);

for (let i = 2; i <= n; i++) {
    if (arr[i]) {
        process.stdout.write(i + " ");
    }
}