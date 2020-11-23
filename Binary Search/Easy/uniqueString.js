// A Unique string
// Given a string s, determine whether it has all unique characters.
class Solution {
    solve(s) {
        let unique = {}
        let sArray = s.split('')
        for (let i = 0; i < sArray.length; i++){
                console.log(unique)
                if (unique[sArray[i]]){ return(false)} else {
                        unique[sArray[i]] = 1}
        }
        return true
    }
}