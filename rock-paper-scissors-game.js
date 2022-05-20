// TODO: Fix round scoring.

const options = document.querySelectorAll(".options");
let pScore = 0;
let cScore = 0;
let tieScore = 0;
let roundNum = 0;

function game() {
  options.forEach((option) => {
    option.addEventListener("click", function () {
      // TO DO: process user click
      const pInput = this.textContent;
      const cInput = computerPlay();
      playRound(pInput, cInput);
      updateScore();
      updateRound();
    });
  });
}

function computerPlay() {
  const cOptions = ["rock", "paper", "scissors"];
  const cInput = cOptions[Math.floor(Math.random() * 3)];
  return cInput;
}

function updateScore() {
  document.getElementById("pScore").textContent = pScore;
  document.getElementById("cScore").textContent = cScore;
  document.getElementById("tieScore").textContent = tieScore;
}

function updateRound() {
  roundNum++; 
  document.getElementById("roundNum").textContent = roundNum;

  if (roundNum == 5) { 
    gameResults();
    restartGame();
  }
}

function restartGame() {
  pScore = 0;
  cScore = 0;
  tieScore = 0;
  roundNum = 0;
  updateScore();
  updateRound();
}

function gameResults() {
  if (pScore === cScore) {
    alert(`game is a tie`);
  } else if (pScore < cScore) {
    alert(`Computer wins with ${cScore} points.`);
  } else {
    alert(`Player wins with ${pScore} points.`);
  }


}

function playRound(pInput, cInput) {
  const currentMatch = `${pInput} vs ${cInput}`;

  if (pInput === cInput) {
    alert(`${currentMatch} is a Tie`);
    tieScore++;
    return;
  }

  if (pInput === "rock") {            // Player chooses rock.
    if (cInput === "scissors") {
      alert(`${currentMatch} = you win`);
      pScore++;
    } else {
      alert(`${currentMatch} = computer wins`);
      cScore++;
    }
  } else if (pInput === "paper") {   // Player chooses paper.
    if (cInput === "rock") {
      alert(`${currentMatch} = you win`);
      pScore++;
    } else {
      alert(`${currentMatch} = computer wins`);
      cScore++;
    }
  } else {
    if (cInput === "paper") {       // Player chooses scissors.
      alert(`${currentMatch} = you win`);
      pScore++;
    } else {
      alert(`${currentMatch} = computer wins`);
      cScore++;
    }
  }

}

game();