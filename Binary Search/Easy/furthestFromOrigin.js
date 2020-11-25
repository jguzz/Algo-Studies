// Furthest From Origin

// You are given a string s where each character is "L" meaning you moved one unit left, "R" meaning you moved one unit right, or "?" meaning either "L" or "R".

// Given you are at position 0, return the maximum possible distance you could be from 0 by replacing "?" with "L" or "R".

class Solution {
    solve(s) {

        let q = 0
        let left = 0
        let right = 0

        for (let i = 0; i < s.length; i++) {
            if (s[i] === "L") {
                left++
            } else if (s[i] === "R") {
                right++
            } else {
                q++
            }
        }

        if (right > left) {
            right += q
            return Math.abs(right - left)
        } else if (left > right) {
            left += q
            return Math.abs(right - left)
        } else {
            return q
        }

    }
}