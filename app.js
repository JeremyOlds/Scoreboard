// create a variable to hold both home and away
// create a function for button to change home and away variable
// create a function for the reset button to reset scores to 0



let homeScore = 0
let awayScore = 0
let totalScore = 0

// Ignore This. was Attempting Array and object stuff.

// let player = {
//   name: "Jeremy",
//   teamScore: 0,
// }


// let playerBase = [player, player]
// let playerPosition = 1

// playerBase[0] = {
//   name: "Player 1",
//   score: 0,
// }
// playerBase[1] = {
//   name: "Player 2",
//   score: 0,
// }

// function createPlayer() {
//   playerPosition += 1
//   playerBase.push(player)
//   playerBase[playerPosition] = {
//     name: "Player " + playerPosition.toString(),
//     score: 0
//   }
//   let newPlayerElement = document.getElementById("players")
// }


function homeScoreChange(score) {
  totalScore += score
  homeScore += score
  let homeScoreElement = document.getElementById("homeScoreBoard")
  homeScoreElement.innerText = homeScore.toString()
  let totalScoreElement = document.getElementById("totalScore")
  totalScoreElement.innerText = totalScore.toString()
}
function awayScoreChange(score) {
  totalScore += score
  awayScore += score
  let awayScoreElement = document.getElementById("awayScoreBoard")
  awayScoreElement.innerText = awayScore.toString()
  let totalScoreElement = document.getElementById("totalScore")
  totalScoreElement.innerText = totalScore.toString()
}
function reset() {
  homeScore = 0
  awayScore = 0
  totalScore = 0
  let awayScoreElement = document.getElementById("awayScoreBoard")
  awayScoreElement.innerText = awayScore.toString()
  let homeScoreElement = document.getElementById("homeScoreBoard")
  homeScoreElement.innerText = homeScore.toString()
  let totalScoreElement = document.getElementById("totalScore")
  totalScoreElement.innerText = totalScore.toString()

}