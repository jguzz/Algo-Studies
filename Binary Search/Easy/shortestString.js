// Shortest String

// Given a string s consisting only of 1s and 0s, you can delete any two adjacent letters if they are different.

// Return the length of the smallest string that you can make if you're able to perform this operation as many times as you want.

class Solution {
    solve(s) {
        let i = 0
        let sArray = s.split('')
        let z = sArray.length
        while (z > 0) {
            i = 0
            while (i < sArray.length -1) {
                if (sArray[i] !== sArray[i + 1] && sArray.length > 1) {
                    sArray.splice(i, 2)
                    break
                }
                i++
            }
            z--
        }
        return sArray.length
    }
}