// Atbash Cipher
// You are given a lowercase alphabet string text. Return a new string where every character in text is mapped to its reverse in the alphabet, so that a becomes z, b becomes y, c becomes x, and so on.
class Solution {
    solve(text) {
        let textAr = text.split('')
        let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
        let reverse = 'zyxwvutsrqponmlkjihgfedcba'.split('')
        let cipher = []
        for (let i = 0; i < text.length; i++){
                cipher.push(reverse[alphabet.indexOf(textAr[i])])
        }
        return cipher.join('')
    }
}

class FasterSolution {
solve(text) {
const cypher = {
'a': 'z',
'b': 'y',
'c': 'x',
'd': 'w',
'e': 'v',
'f': 'u',
'g': 't',
'h': 's',
'i': 'r',
'j': 'q',
'k': 'p',
'l': 'o',
'm': 'n',
'n': 'm',
'o': 'l',
'p': 'k',
'q': 'j',
'r': 'i',
's': 'h',
't': 'g',
'u': 'f',
'v': 'e',
'w': 'd',
'x': 'c',
'y': 'b',
'z': 'a',
}

    return text.split('').map(char => {
        return cypher[char]
    }).join('')

}
}
