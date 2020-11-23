// Making List Values Equal

// You are given a list of integers nums. Consider an operation where we select some subset of integers in the list and increment all of them by one.

// Return the minimum number of operations needed to make all values in the list equal to each other.
class Solution {
    solve(nums) {
        const largest = Math.max(...nums)
        const smallest = Math.min(...nums)
        let operations = largest - smallest
        // while (Math.min(...nums) !== largest) {
        //     for (let i = 0; i < nums.length; i++) {
        //         nums[i] < largest ? nums[i] += 1 : null
        //     }
        //     operations += 1
        // }
        
        return operations
    }
}