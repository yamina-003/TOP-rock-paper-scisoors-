
// a function to return a random int between 0 , 1 or 2
function getRandomInt() {
    return Math.floor(Math.random()* 3);
}


// getComputerChoice return rock, paper or scisoors depending getRandomInt
function getComputerChoice(randomInt) {
    return (randomInt == 0) ? "rock"
    : (randomInt == 1) ? "paper"
    : "scisoors";
}

// getHumanChoice to get the user's desired move
function getHumanChoice(event) {
    return event.target.textContent;
}


const buttons = document.querySelector(".buttons ");
const message = document.querySelector(".message");
const playerScore = document.querySelector(".player .score");
const comScore = document.querySelector(".computer .score");

let humanScore = 0;
let computerScore = 0;

playerScore.textContent = humanScore;
comScore.textContent = computerScore;


function playRound(humanChoice, computerChoice){
    if (humanScore < 5 && computerScore < 5){
       if ((humanChoice == "paper" && computerChoice == "rock") || 
           (humanChoice== "scisoors" && computerChoice == "paper") || 
            (humanChoice == "rock" && computerChoice == "scisoors")) {
                humanScore++;
                playerScore.textContent = humanScore;
                comScore.textContent= computerScore;
        } else {
                computerScore++;
                playerScore.textContent = humanScore;
                comScore.textContent= computerScore;
        }
    }
}


buttons.addEventListener("click", (e) =>playRound(getHumanChoice(e), getComputerChoice(getRandomInt())));

const btnPlayAgain = document.querySelector(".play-again");

btnPlayAgain.addEventListener("click", () =>{
    playerScore.textContent = 0;
    comScore.textContent = 0;
})





