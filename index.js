let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

// Escolha aleatória para o computador
const getComputerChoice = () => {
  const getRandomNumber = Math.floor(Math.random() * 3);

  if (getRandomNumber === 0) {
    return "Rock";
  } else if (getRandomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
};

// Escolha do jogador
const getHumanChoice = () => {
  return prompt("Select your choice: Rock, Paper or Scissors");
};

const playRound = () => {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  let lostMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
  let winMessage = `You win! ${humanChoice} beats ${computerChoice}`;
  let drawMessage = `It's a tie! Both chose ${humanChoice}`;

  if (humanChoice === computerChoice) {
    tieScore++;
    console.log(drawMessage);
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore++;
    console.log(winMessage);
  } else {
    computerScore++;
    console.log(lostMessage);
  }

  console.log(`Score: Human ${humanScore} - Computer ${computerScore} - Tie ${tieScore}`);
};

// Executa uma rodada
playRound();
playRound();
playRound();
playRound();
playRound();