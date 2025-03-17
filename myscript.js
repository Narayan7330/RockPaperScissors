// // variables to keep record of the score of the game
// let humanScore = 0;
// let computerScore = 0;


// function named getComputerChoice that randomly returns “rock”, “paper” or “scissors”.
function getComputerChoice(){

 let num = Math.random();

if (num < 0.5) {

  return("rock");
  
}

else if (num >= 0.5 && num < 0.8){

return("paper");
}
else {
  return("scissors");
}

}





// function which takes the players choice and return it

function getHumanChoice(){

  let input = prompt("choose rock , paper or scissors").toLowerCase();
 return input;

} 

// playing game
function playRound(humanChoice,computerChoice){

if (humanChoice === "rock" && computerChoice === "paper"){
  console.log("you lose , paper beats rock");
  return "computer";
   
  
}
else if (humanChoice=== "rock" && computerChoice === "scissors"){
  console.log("you won , rock beats scissors");
  return "human";
  
}
else if (humanChoice=== "rock" && computerChoice === "rock"){
  console.log("tie");
  return;
}
else if (humanChoice=== "paper" && computerChoice === "rock"){
  console.log("you won,paper beats rock");
  return "human";
}
else if (humanChoice=== "paper" && computerChoice === "scissors"){
  console.log("you lose ,scissors beats paper");
  return "computer";
 
}
else if (humanChoice=== "paper" && computerChoice === "paper"){
  console.log("tie");
  return;
}
else if (humanChoice=== "scissors" && computerChoice === "scissors"){
  console.log("tie");
  return;
}
else if (humanChoice=== "scissors" && computerChoice === "rock"){
  console.log("you lose,rock beats scissors");
  return "computer";
  
}
else if (humanChoice=== "scissors" && computerChoice === "paper"){
  console.log("you won,scissors beats paper");
  return "human";
}

}





//  logic to play the entire game (5 rounds)
function playGame(){

let humanScore = 0;
let computerScore = 0;


// round1

const humanSelection1 = getHumanChoice();
const computerSelection1 = getComputerChoice();
const winner1 = playRound(humanSelection1,computerSelection1);
if (winner1 === "human") humanScore++;
if (winner1 === "computer") computerScore++;

// round2

const humanSelection2 = getHumanChoice();
const computerSelection2 = getComputerChoice();
const winner2 = playRound(humanSelection2,computerSelection2);
if (winner2 === "human") humanScore++;
if (winner2 === "computer") computerScore++;

// round3

const humanSelection3 = getHumanChoice();
const computerSelection3 = getComputerChoice();
const winner3 = playRound(humanSelection3,computerSelection3);
if (winner3 === "human") humanScore++;
if (winner3 === "computer") computerScore++;

// round4

const humanSelection4 = getHumanChoice();
const computerSelection4 = getComputerChoice();
const winner4 = playRound(humanSelection4,computerSelection4);
if (winner4 === "human") humanScore++;
if (winner4 === "computer") computerScore++;

// round5

const humanSelection5 = getHumanChoice();
const computerSelection5 = getComputerChoice();
const winner5 = playRound(humanSelection5,computerSelection5);
if (winner5 === "human") humanScore++;
if (winner5 === "computer") computerScore++;


// game end
console.log("Game Ends");
console.log("score are as follows");
console.log(`you: ${humanScore}`);
console.log(`computer: ${computerScore}`);

if (humanScore > computerScore) {

console.log("you won the game");
}
else if (humanScore < computerScore){

  console.log("computer won the game");
}
else {
console.log("game is tie");
}

}

playGame();