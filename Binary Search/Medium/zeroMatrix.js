// Zero Matrix
// Given a two-dimensional matrix of integers, for each zero in the original matrix, replace all values in its row and column with zero, and return the resulting matrix.

class Solution {
    solve(matrix) {
        let row = []
        let column = []

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === 0) {
                    row.push(i)
                    column.push(j)
                }
            }
        }
        console.log(row, column)
        for (let i = 0; i < matrix.length; i++) {
            if (row.includes(i)) {
                matrix[i] = Array(matrix.length).fill(0)
            } else {
                for (let j = 0; j < matrix[i].length; j++) {
                    if(column.includes(j)){
                        matrix[i][j] = 0
                    }
                }
            }
        }
        return matrix
    }
}