// Transpose of a Matrix
// Given an integer square (n by n) matrix, return its transpose. A transpose of a matrix switches the row and column indices. That is, for every r and c, matrix[r][c] = matrix[c][r].

class Solution {
    solve(matrix) {
        let newArr = []
        for (let i = 0; i < matrix.length; i++) {
                newArr.push([])
                    for (let j = 0; j < matrix.length; j++) {
                        newArr[i].push(matrix[j][i])
                        }
        }
        return newArr
    }
}