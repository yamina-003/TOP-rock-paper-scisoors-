
// a function to return a rando; int between 0 and 2
function getRandomInt() {
    return Math.floor(Math.random()* 3);
}


// getComputerChoice return rock, paper or scisoors depending getRandomInt
function getComputerChoice(randomInt) {
    return (randomInt == 0) ? "rock"
    : (randomInt == 1) ? "paper"
    : "scisoors";
}

// test purposes only 
// note for self delete the variable randomInt before submitting the project
const randomInt = getRandomInt();
console.log(randomInt);
console.log(getComputerChoice(randomInt));

// getHumanChoice to get the user's desired move

function getHumanChoice() {
    return prompt("choose your move by typing one of these : rock , paper or scisoors");
}

// test purposes only 
console.log(getHumanChoice());

// keep track of the players scores
let humanScore = 0;
let computerScore = 0;

