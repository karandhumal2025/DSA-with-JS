// HCF (Highest Common Factor) using recursion
// time complexity O(log(min(a, b)))
// space complexity O(log(min(a, b)))

function hcf(a, b) {
    if (b === 0) return a;
    return hcf(b, a % b);
}
console.log(hcf(30, 15));