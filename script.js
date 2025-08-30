
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

// getHumanChoice to get the user's desired move
function getHumanChoice() {
    return prompt("choose your move by typing one of these : rock , paper or scisoors");
}

// the function to play a single round
function playRound(humanChoice, computerChoice) {
   if (humanChoice.toLowerCase() === computerChoice) {
    return 0;
   } else if ((humanChoice.toLowerCase() == "paper" && computerChoice == "rock") || 
   (humanChoice.toLowerCase() == "scisoors" && computerChoice == "paper") || 
   (humanChoice.toLowerCase() == "rock" && computerChoice == "scisoors")) {
     return 1;
   } else {
    return 2;
   }
}

// function to print the players final scores
function printScore(userScore, opponentScore){
    if (userScore > opponentScore) {
        console.log("you won! your score is: "+ userScore + " the opponent's score is : " + opponentScore + ".");
    } else if(userScore < opponentScore){
        console.log("you lost! your score is: "+ userScore + " the opponent's score is : " + opponentScore + ".");
    } else {
        console.log("it's a tie. your score is: "+ userScore + " the opponent's score is : " + opponentScore + ".");
    }
}


// the function to play  5 rounds
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let score;
    for (let i = 1; i<= 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice(getRandomInt());

        console.log(humanChoice);
        console.log(computerChoice);

        score = playRound(humanChoice, computerChoice);
        if (score === 1) {
            humanScore++;
        } else if(score === 2) {
            computerScore++;
        }
    }
    printScore(humanScore, computerScore);
}


playGame();





