// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// My solution: 

function rowWeights(array){
    const teamOne = []
    const teamTwo = []
    for(let i = 0; i < array.length; i++){
      if(i % 2 === 0){
        teamOne.push(array[i])
      } else {
        teamTwo.push(array[i])
      }
    }
    const teams = [teamOne.reduce((sum, num) => sum += num, 0), teamTwo.reduce((sum, num) => sum += num, 0)]
    return teams
  }