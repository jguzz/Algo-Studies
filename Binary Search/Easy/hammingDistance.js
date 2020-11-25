//Hamming Distance
// Given two integers x, and y return the number of positions where their values differ in their binary representations as a 32-bit integer.

class Solution {
    solve(x, y) {
        let count = 0
        x = x.toString(2)
        y = y.toString(2)
        
        if (x.length < y.length) x = '0'.repeat(y.length - x.length) + x
        if (y.length < x.length) y = '0'.repeat(x.length - y.length) + y
        let largest = x.length > y.length ? x.length : y.length
        for (let i = 0; i < largest; i++) {
            if (x[i] !== y[i]) {
                count++
            }
        }
        return count
    }
}