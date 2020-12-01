// Length of longest balanced subsequence

// Given a string s containing brackets "(" and ")", return the length of the longest subsequence of balanced brackets.

class Solution {
    solve(s) {
        let subsequenceCount = 0
        let sArray = s.split('')
        let hitOpenParenthesis = 0
        for (let i = 0; i < sArray.length; i++) {
            if (sArray[i] == ')' && hitOpenParenthesis > 0) {
                hitOpenParenthesis--
                subsequenceCount += 2
            } else if (sArray[i] == "(") {
                hitOpenParenthesis++
            }
        }
        return subsequenceCount
    }
}