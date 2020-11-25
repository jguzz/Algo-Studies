// Greatest Common Divisors
// Given a list of positive integers nums, return the largest positive integer that divides each of the integers.

class Solution {
    solve(nums) {
        let divisor = 1 
        let greatestDivisor = 1
        let count = 1
        let smallest = Math.min(...nums)
        while(divisor <= smallest){
                // Will go thorugh all the numbers checking if they are divisable by the current divisor. Increasing the count if they are.
                for (let i = 0; i < nums.length; i++){
                        if (nums[i] % divisor === 0){
                                console.log(count)
                                count++
                        }
                        if (count === nums.length){
                                greatestDivisor = divisor
                        }
                }
               count = 0
               divisor += 1
        }
        return greatestDivisor
    }
}