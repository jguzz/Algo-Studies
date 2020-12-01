// Max product of two numbers
// Given a list of integers nums, find the largest product of two distinct elements.

class slowSolution {
    solve(nums) {
        let products = nums[0] * nums[ 1]
        for (let i = 0; i < nums.length; i++) {
            for (let j = i +1; j < nums.length; j++) {
                if (products < nums[i] * nums[j]) {
                    products = nums[i] * nums[j]
                }
            }
        }
        return products
    }
}

class Solution {
	solve(nums) {
		 let n = nums.length
		 // Arrays.sort(nums)
		 nums.sort((a,b) => a - b)
 
		 return Math.max(nums[0] * nums[1], nums[n - 1] * nums[n - 2])
	 }
 }