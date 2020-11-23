// Vowels and Consonants Sort
// Given a lowercase alphabet string s, return a string with all the vowels of s in sorted order followed by all the consonants of s in sorted order.

// Note: vowels are ["a", "e", "i", "o", "u"] and consonants are all other characters.
class Solution {
    solve(s) {
        let vowels = ['a','e','i','o','u']
        let sArray = s.split('')
        let vowelSort = []
        let constSort = []
        for(let i = 0; i < sArray.length; i++){
                vowels.includes(sArray[i]) ? vowelSort.push(sArray[i]) : constSort.push(sArray[i])
        }
        vowelSort = vowelSort.sort().concat(constSort.sort()).join('')
        return vowelSort
    }
}