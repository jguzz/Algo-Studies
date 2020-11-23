// acronym
// Given a string s representing a phrase, return its acronym. Acronyms should be capitalized and should not include the word "and".

class Solution {
    solve(s) {
        let sArray = s.split(' ')
        let acronym = []
        for (let i = 0; i < sArray.length; i++){
                sArray[i] !== 'and' ? acronym.push(sArray[i].charAt(0).toUpperCase()) : null
        }
        return acronym.join('')
    }
}