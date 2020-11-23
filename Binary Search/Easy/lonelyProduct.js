// Lonely Product

// Given three numbers, a, b, and c, return their product, but if any two numbers are the same, they do not count.

class Solution {
    solve(a, b, c) {
        let duplicate = {}
        let inc = 0
        let na = a 
        let nb = b
        let nc = c
        if(a === b){
                na = 1
                nb = 1
        } 
        if(a === c ){
                na = 1
                nc = 1
        }
        if( c === b){
                nb = 1
                nc = 1
        }
        return na * nb * nc
    }
}