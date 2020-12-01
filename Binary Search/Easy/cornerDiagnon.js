// Corner diagnols

// You are given an integer n representing the length of an n by n board. Remove all cells that are diagonal to one of the four corners (top left, top right, bottom right, and bottom left) and return the number of empty cells leftover.

// For example, given n = 4

// X O O X
// O X X O
// O X X O
// X O O X
// We see there's 8 empty "O" squares.
class Solution {
    solve(n) {
       return n % 2 === 0 ?  (n * n) - (n * 2) : (n * n) - ((n * 2) -1)
    }
}