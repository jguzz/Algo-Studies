// Recurring Character
// Given a string, return the index of the first recurring character in it. If there are no recurring characters, return -1.
class Solution {
    solve(s) {
        let occured = []
        let sArray = s.split('')
        for(let i = 0; i < sArray.length; i++){
            console.log(occured[sArray[i]])
            if(occured.includes(sArray[i])){
                return i
            } else {
                occured.push(sArray[i])
            }
        }
        return -1
    }
}