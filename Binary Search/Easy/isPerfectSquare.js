// Check if Number Is Perfect Square

// Given an integer n, return whether n = k * k for some integer k.
// This should be done without using built-in square root function.

class Solution {
    solve(n) {
        let k = 0
        while ((k * k) <= n){
                if(k * k === n ){
                        return true
                } else {
                        k++
                }
        }
        return false
    }
}