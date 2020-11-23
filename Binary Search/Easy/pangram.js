// PANGRAM
// Given a string s, representing a sentence, return whether every letter (case-insensitive) of the alphabet is used at least once.
class Solution {
    solve(s) {

        let map = {}
        let alphabet = "abcdefghijklmnopqrstuvwxyz"

        for (let letter of s.toLowerCase()) {
            if (alphabet.includes(letter)) {
                map[letter] += 1
            }

        }
        if (Object.keys(map).length === 26) {
            return true
        } else {
            return false
        }
    }
}