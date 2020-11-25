// Interleaved String
// Given two strings s0 and s1, return the two strings interleaved, starting with s0. If there are leftover characters in a string they should be added to the end.class Solution {
    solve(s0, s1) {
        let largest = s0.length > s1.length ? s0.length : s1.length
        let output = ""
        let i = 0;
        while (largest > 0) {
                s0[i]? output += s0[i] : null
                s1[i]? output += s1[i] : null
                largest--
                i++
        }
        return output
    }
}