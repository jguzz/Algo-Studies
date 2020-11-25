// Austin Powers
// Given an integer n greater than or equal to 0, return whether it is a power of two.

class Solution {
    solve(n) {
        let power = 2
        let i = 0
        for(let i = 0; Math.pow(power, i) <= n; i++){
                if(Math.pow(power, i) === n){
                        return true
                }
        }
        return false
    }
}