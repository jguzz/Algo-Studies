// consecutive duplicates
//Given a string s, consisting of "X" and "Y"s, delete the minimum number of characters such that there's no consecutive "X" and no consecutive "Y".

class Solution {
    solve(s) {
        let sArray = s.split('')
        let newArray = []
        for (let i = 0; i < sArray.length; i++){
                sArray[i] === sArray[i+1] ? null : newArray.push(sArray[i])
        }
        return newArray.join('')
    }
}