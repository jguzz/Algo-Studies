// Largest by two times
// Given a list of integers, return whether the largest number is bigger than the second-largest number by more than two times.

// For example, given the list [3, 9, 6], you should return false, since 9 is not bigger than 12 (2 times 6).

// Given the list [6, 3, 15], you should return true, since 15 is bigger than 12 (2 times 6).

class Solution {
    solve(nums) {
        let largest = Math.max(...nums)
        let secondLargest = 0
        for (let i = 0; i < nums.length; i++){
                nums[i] !== largest && secondLargest < nums[i]? secondLargest = nums[i] : null
        }
        return secondLargest * 2 < largest ? true : false
    }
}