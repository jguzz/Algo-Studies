// Unique Occurances
// Given a list of integers nums, return whether the number of occurrences of every value in the array is unique.

// Note: Numbers can be negative.

class Solution {
    solve(nums) {
        let occurances = {}
        let check = []
        for (let i = 0; i < nums.length; i++) {
            if (occurances[nums[i]] > 0) {
                occurances[nums[i]] += 1
            } else {
                occurances[nums[i]] = 1
            }
        }
        // for (let i = 0; i < Object.keys(occurances).length; i++){

        // }
        let occured = []
        let values = Object.values(occurances)
        for(let i = 0; i < values.length; i++){
            if(occured.includes(values[i])){
                return false
            } else {
                occured.push(values[i])
            }
        }
        return true
    }
}