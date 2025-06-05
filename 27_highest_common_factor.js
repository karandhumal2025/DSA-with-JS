// HCF (Highest Common Factor) 
// time complexity O(max(a, b))
// space complexity O(max(a, b))

function hcf(a, b) {
    if (a == b) return a
     if(a>b) return hcf(a - b, b);
     else return hcf(a, b - a);
}
console.log(hcf(32, 20))