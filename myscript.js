
// function named getComputerChoice that randomly returns “rock”, “paper” or “scissors”.
function getComputerChoice(){

 let num = Math.random();

if (num < 0.5) {

  return("Rock");
  
}

else if (num >= 0.5 && num < 0.8){

return("paper");
}
else {
  return("Scissors");
}

}

console.log(getComputerChoice())

// function which takes the players choice and return it

function getHumanChoice(){

  let input = prompt("choose rock , paper or scissors");

  return(input);

}
console.log(getHumanChoice());