 // variables to keep record of the score of the game

 const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");


let humanScore = 0;
let computerScore = 0;


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


// takes players choice with button
const decission = document.querySelector("#decission");


// playing game
function playRound(humanChoice,computerChoice){

// const victory = document.getElementById("victory")
// const defeat = document.getElementById("defeat")


if (humanChoice === "rock" && computerChoice === "paper"){
 decission.textContent = "you lose,paper beats rock";
  computerScore ++;
}

else if (humanChoice=== "rock" && computerChoice === "scissors"){
  decission.textContent = "you won,rock beats scissors";
  humanScore ++;
}
else if (humanChoice=== "rock" && computerChoice === "rock"){
  decission.textContent ="tie";
}
else if (humanChoice=== "paper" && computerChoice === "rock"){
  decission.textContent = "you won,paper beats rock";
  humanScore ++;
}
else if (humanChoice=== "paper" && computerChoice === "scissors"){
  decission.textContent = "you lose ,scissors beats paper";
  computerScore ++;
 
}
else if (humanChoice=== "paper" && computerChoice === "paper"){
  decission.textContent = "tie";
  return;
}
else if (humanChoice=== "scissors" && computerChoice === "scissors"){
  decission.textContent = "tie";
  return;
}
else if (humanChoice=== "scissors" && computerChoice === "rock"){
  decission.textContent = "you lose,rock beats scissors";
  computerScore ++;
  
}
else if (humanChoice=== "scissors" && computerChoice === "paper"){
  decission.textContent = "you won,scissors beats paper";
  humanScore ++;
}
document.getElementById("humanScore").textContent = humanScore;
document.getElementById("computerScore").textContent = computerScore;



if(humanScore === 5){

  decission.textContent = "congrats, you won the game";
  


  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;

}
else if (computerScore === 5){
  decission.textContent = "sorry, you lose the game";



  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;

}

}

humanScore = 0;
computerScore = 0;

document.getElementById("rock").addEventListener("click",()=>{ playRound("rock",getComputerChoice());  
})

document.getElementById("paper").addEventListener("click",()=>{
  playRound("paper",getComputerChoice());
})

document.getElementById("scissors").addEventListener("click",()=> {playRound("scissors",getComputerChoice());  
})























































