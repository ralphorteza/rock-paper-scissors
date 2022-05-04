const options = document.querySelectorAll(".options");
let pScore = 0;
let cScore = 0;

function game() {
  options.forEach((option) => {
    option.addEventListener("click", function () {
      // TO DO: process user click
      const pInput = this.textContent;
      const cInput = computerPlay();

      playRound(pInput, cInput);
      updateScore();
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
}


function playRound(pInput, cInput) {
  const currentMatch = `${pInput} vs ${cInput}`;

  if (pInput == cInput) {
    alert(`${currentMatch} is a Tie`);
    return;
  }

  if (pInput === cInput) {
    alert(`${currentMatch} is a Tie`);
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