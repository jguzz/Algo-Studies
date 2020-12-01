// String Sequence

// Directions kinda suck

// Given strings s0, s1 and a positive integer n, return the nth term of the sequence A where:

// A[0] = s0
// A[1] = s1
// A[n] = A[n - 1] + A[n - 2] if n is even, otherwise A[n] = A[n - 2] + A[n - 1].
// For example, given s0 = "a" and s1 = "b", the sequence A would be:

// "a"
// "b"=
// "ba" ("b" + "a")
// "bba" ("b" + "ba")
// "bbaba" ("bba" + "ba")

class Solution {
    solve(s0, s1, n) {
        let arr = [s0, s1]

        for (let i = 2; i <= n; i++) {
            if (i % 2 === 0) arr[i] = arr[i - 1] + arr[i - 2]
            else arr[i] = arr[i - 2] + arr[i - 1]
        }
        return arr[n]
    }
}