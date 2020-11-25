// Detect Voter Fraud
// Given a two dimensional list of integers votes, where each list has two elements [candidate_id, voter_id], report whether any voter has voted more than once.

class Solution {
    solve(votes) {
        let voted = []
        for (let i = 0; i < votes.length; i++){
                if (voted.includes(votes[i][1])){
                        return true
                } else {
                        voted.push(votes[i][1])
                }
        }
        return false
    }
}