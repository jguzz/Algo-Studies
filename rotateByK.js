// Rotate list left by k
// Write a function that rotates a list of numbers to the left by k elements. For example, [1, 2, 3, 4, 5, 6] rotated by 2 becomes [3, 4, 5, 6, 1, 2]. Numbers should wrap around.

// Note: The list is guaranteed to have at least one element, and k is guaranteed to be less than or equal to the length of the list.

// Bonus: Do this without creating a copy of the list. How many swap or move operations do you need?
class Solution {
    solve(nums, k) {
        const array = []
        for(let i = 0; i < k; i++){
                array.push(nums.shift())  
        }
        nums = [...nums, ...array]
        return nums
    }
}

//or 

solve(nums, k) {
	return nums.slice(k).concat(nums.slice(0, k))
}