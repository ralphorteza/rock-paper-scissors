/* Stores current scores for user and computer */
function scores(str, scoreArray) {
    if (str == "computer") { scoreArray[0] = scoreArray[0] + 1; }
    if (str == "player") { scoreArray[1] = scoreArray[1] + 1; }
    if (str == "draw") { scoreArray[2] = scoreArray[2] + 1; }
   
    return scoreArray;
}

/* outputs the current score of the current round */
function outputCurrentScores(scoreArray, i) {
    let computerScore = scoreArray[0];
    let userScore = scoreArray[1];
    let drawScore = scoreArray[2];
    let outputString = "computer: " +computerScore+ "| user: " +userScore+ "| draw: " +drawScore;

    console.log("current scores");
    console.log(outputString);
}

/* outputs the final scores */
function outputGameResults(scoreArray) {
    console.log("----------------");
    console.log("Final Results: ");
    if ( scoreArray[0] === scoreArray[1]) {
        console.log("The game is a draw.");
   } else if (scoreArray[0] != scoreArray[1] && scoreArray[0] > scoreArray[1]) {
       console.log("computer wins with " +scoreArray[0]+ "/5 games.");
   } else {
       console.log("user wins with " +scoreArray[1]+ "/5 games.");
   }
}

/* Main function to play game for 5 rounds */
function game() {
    let scoreArray = [0,0,0];      // stores current scores for computer, user, or draw.
    const MAX_GAMES = 5;           // amount of rounds to play.
    let resultString = "";         // stores the result in String form.
   
    // Iterates the game with n-rounds and updates
    // and output computer and user hands per round.
    for (let i=1; i<=MAX_GAMES; i++) {
       console.log("--round " + i + "--");
       let player = userPlay();
       let computer = computerPlay();
        resultString = playRound(player, computer);     // plays a round and returns round results.
        scoreArray = scores(resultString, scoreArray);  // update scores to current round.
        outputCurrentScores(scoreArray, i);             // display current score.
   }

   outputGameResults(scoreArray);
}


/* Computer to choose hand by assigning number values to
 * each hand. rock == 0, paper == 1, scissors == 2. */
function computerPlay() {

    let randomNumber = Math.floor(Math.random()*3);  // generates a random number from 0 to 2.
    let choice = "";                                 // initialize choice to be stored as a String.

    // Generated number will decide which hand the computer will play.
    if (randomNumber == 0) {
        choice = "rock";
    } else if (randomNumber == 1) {
        choice = "paper";
    } else {
        choice = "scissors";
    }

    return choice;      // returns the computer hand.
}

/* This function displays a prompt for user to input their hand. */
function userPlay() {
    let input = prompt("Please choose your hand: ");        // stores hand in message prompt.
    input = input.toLowerCase().trim();                            // lowercase and trim whitespace.

    // Validates input if not given correct choices.
    while (input != "paper" && input != "scissors" && input != "rock") {
        input = prompt("Not a valide hand. Choose from rock, paper, or scissors: ");
        input = input.toLowerCase().trim();
    }

    return input;   
}

// This function plays a round in a game of rock, paper, scissors.
function playRound(playerSelection, computerSelection) {

    let results = "";               // stores the results if player or computer wins or results in a draw.
    let playerWins = "player";      // to replace results value if player wins.
    let computerWins = "computer";  // to replace results value if computer wins.
    let draw = "draw";              // to replace results value if round is a draw.

    console.log("player plays: " + playerSelection);        // outputs the player's hand.
    console.log("computer plays: " + computerSelection);    // outputs the computer's hand.

    // The combination of hands that determines the win, loss, and draw of computer and player.
    if (playerSelection === "rock" && computerSelection === "paper") {
        //computer wins
        console.log("computer wins round");
       results += computerWins
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        // player wins
        console.log("player wins round");
        results = playerWins;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        // player wins
        console.log("player wins round");
        results = playerWins;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        //computer wins
        console.log("computer wins round");
        results = computerWins;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        // computer wins
        console.log("computer wins round");
        results = computerWins;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        // player wins
        console.log("player wins round");
        results = playerWins;
    } else {
        // draw
        console.log("draw");
        results = draw;
    }

    return results;
}

/* const playerSelection = userPlay();
const computerSelection = computerPlay(); */
game();