// Happy Numbers

// Given an integer n, we apply this transformation until it becomes a 1: take each of the digits in n, square it, and then take their sum.

// Return whether n will end up in 1 after the transformations.

class Solution {
    solve(n) {
        const occur = []
        while(n !== 1){
                let nArray = n.toString().split('')
                let total = 0
                console.log(nArray)
                for(let i = 0; i < nArray.length; i++){
                        total += Math.pow(nArray[i], 2)
                        
                }
                if(total === 1){
                        return true
                } else if(occur.includes(total)){
                        return false
                } else {
                        n = total
                        occur.push(total)
                }
        }
    }
}