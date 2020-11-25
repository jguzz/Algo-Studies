// Leaderboard

// You are given a list of integers nums, representing the number of chess matches each person has won. Return a relative ranking (0-indexed) of each person. If two players have won the same amount, their ranking should be the same.
class Solution {
    solve(nums) {
        let original = [...nums]
        let sorted = nums.sort((a, b) => b - a)
        let scores = {}
        let rank = 0
		// Rank the numbers into an object based on the sorted array/
        for (let i = 0; i < nums.length; i++) {
            if (scores[sorted[i]] == null) {
                scores[sorted[i]] = rank
                rank += 1
            }
        } 
		// Map the ranks of the original array based on our object.
        for (let i = 0; i < nums.length; i++) {
            original[i] = scores[original[i]]
        }
        return original
    }
}