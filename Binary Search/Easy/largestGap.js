// Largest Gap
// Given a list of integers nums, return the largest difference of two consecutive integers in the sorted version of nums.

class Solution {
    solve(nums) {
        nums = nums.sort((a,b) => a-b)
        let difference = []
        for(let i = 1; i < nums.length; i++ ){
                difference.push(nums[i] - nums[i-1])
        }
        return Math.max(...difference)
    }
}