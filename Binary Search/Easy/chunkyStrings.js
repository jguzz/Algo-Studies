// CHUNKY STRINGS
// Given a string s and an integer n, split up s into n-sized pieces.
// For example, given:
// s = "abcdefg"
// n = 3
// Return ["abc", "def", "g"].
// If there are extra characters left over, they should be in its own piece.

class Solution {
    solve(s, n) {
        let sArr = s.split('')
        let strings = []
        for (let i = 0; i < s.length; i+= n) {
            strings.push(sArr.slice(i, n + i).join(""))
            strings
            console.log(strings)
        }
        return strings
    }
}