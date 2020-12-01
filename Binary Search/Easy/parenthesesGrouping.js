// Parentheses Grouping

// Given a string s containing balanced parentheses "(" and ")", split them into the maximum number of balanced groups.

class Solution {
    solve(s) {
        let ans = []
        let temp = ''
        let count = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                ++count;
            } else {
                --count;
            }
            temp = temp + s[i];
            if (count === 0) {
                ans.push(temp);
                temp = ''
            }
        }
        return ans;
    }
}