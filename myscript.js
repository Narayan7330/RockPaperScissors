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