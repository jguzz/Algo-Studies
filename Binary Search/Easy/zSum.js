// Z Sum
// Given an n by n integer matrix, return the sum of all elements that form a Z in the matrix. For example, given:
class Solution {
    solve(matrix) {
        let n = matrix.length - 1
        let zArr = []
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (i === 0) {
                    zArr.push(matrix[i][j])
                } else if (i === n) {
                    zArr.push(matrix[i][j])
                } else if (j === n - i) {
                    zArr.push(matrix[i][j])
                }
            }
        }
        return zArr.reduce((a, b) => a + b, 0)
    }
}