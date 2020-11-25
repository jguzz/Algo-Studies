// Pascals Triangle

// Given an integer n, return the nth (0-indexed) row of Pascal's triangle.

// Pascal's triangle can be created as follows: In the top row, there is an array of 1. Subsequent row is created by adding the number above and to the left with the number above and to the right, treating empty elements as 0.

class Solution {
    solve(n) {
        if (n === 1 || n === 0) {
            return [1];
        }
        if (n === 2) {
            return [1, 1];
        }
        let arr = [1, 1];
        for (let k = 3; k <= n + 1; k++) {
            let temp = [arr[0]];
            for (let i = 0; i < arr.length - 1; i++) {
                temp.push(arr[i] + arr[i + 1])
            }
            temp.push(arr[0])
            arr = temp;
        }
        return arr
    }
}