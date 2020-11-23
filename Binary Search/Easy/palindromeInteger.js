// Palindrome Integer
// Given a non-negative integer num, return whether it is a palindrome.
// Bonus: Can you solve it without using strings?

class Solution {
    solve(num) {
        //     121
        let reverse = 0
        let original = num
        while (num > 0){
                reverse = (reverse * 10) + (num % 10)
                num = Math.floor(num / 10)
        }
        return original === reverse ? true : false
    }
}