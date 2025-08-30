# TOP-rock-paper-scisoors-
Project Overview

This is a simple Rock, Paper, Scissors game built as part of thhe odin project.
The game is played entirely in the browser console, between the user and the computer.

How It Works:

Computer Choice:

-Implemented with a getComputerChoice() function.

-Uses Math.random() to return either "rock", "paper", or "scissors".

User Choice:
-Implemented with a getHumanChoice() function.

-Uses a prompt() message to get the user’s input.

Play Round:

-The playRound() function compares the two choices.

-A series of conditionals determine the winner of each round.

Play Game:

-The playGame() function runs a loop of 5 rounds.

-It keeps track of the scores of both the player and the computer.

-At the end, the game declares the overall winner.

What I Learned:

-How to create and use functions effectively.

-The importance of parameters and variable scope.

-Using console.log for debugging and fixing errors.

How to Play:

-Open the index.html file in your browser.

-Open the Developer Console.

-A prompt will automatically appear asking for your choice.

-Play continues for 5 rounds, and the results will be shown in the console.

Future Improvements:

-Add input validation so the game handles cases where:

-The user enters a typo (e.g., "rok" instead of "rock").

-The user leaves the input empty or cancels the prompt.
