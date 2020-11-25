// COUNTING DINOSAURS

// You are given a string animals and another string dinosaurs. Every letter in animals represents a different type of animal and every unique character in dinosaurs represents a different dinosaur.

// Return the total number of dinosaurs in animals.
class Solution {
    solve(animals, dinosaurs) {
            let dinoInAnimal = 0
    
        for (let i = 0; i < animals.length; i++){
                let count = 0
                for(let j = 0; j < dinosaurs.length && count === 0; j++){
                        if(animals[i] === dinosaurs[j]){
                                dinoInAnimal++ 
                                count++ 
                        }
                }
        }
        return dinoInAnimal
    }
}