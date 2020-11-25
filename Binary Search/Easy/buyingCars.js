// Buying cars
// Given a list of integers prices representing prices of cars for sale, and a budget k, return the maximum number of cars you can buy.
class Solution {
    solve(prices, k) {
           let amount = 0
           prices = prices.sort((a,b) => a-b)
        for(let price of prices){
                if(k > 0){
                        k -= price
                        k >= 0 ? amount += 1 : null
                        console.log(k)
                }
        }
        return amount
    }
}