// Given an integer n, return a list with each number from 1 to n, except if it's a multiple of 3 or has a 3, 6, or 9 in the number, it should be the string "clap".

// Note: return the number as a string.
class Solution {
    solve(n) {
        let array = [1]
        for (let i = 1; i <= n; i++) {
            array.push(i.toString())
            if (array[i].includes(3) ||
                array[i].includes(6) ||
                array[i].includes(9) ||
                array[i] % 3 === 0) {
                array[i] = "clap"
            }
        }
        array.shift()
        return array
    }
}