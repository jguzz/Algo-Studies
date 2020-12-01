// Guess the root

// Given a non-negative integer n, find a number r such that r * r = n and round down to the nearest integer.

// Can you implement this without using the built-in square root?

class Solution {
    solve(n) {
        let mult = 1
        while(mult * mult < n){
            if(mult * mult === n){
                return mult
            } 
            if((mult+1) * (mult+1) <= n){
                mult += 1
            } else {
                return mult
            }
        }
         return mult
    }
}