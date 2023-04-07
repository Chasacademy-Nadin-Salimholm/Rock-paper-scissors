const choices = document.querySelectorAll('.btn');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const result = document.getElementById('result');
const playAgainBtn = document.getElementById('play-again');


let pScore = 0;
let cScore = 0;

playAgainBtn.addEventListener('click', () => {
    pScore = 0;
    cScore = 0;
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
    result.textContent = '';
    document.getElementById('player-choice').textContent = '';
    document.getElementById('computer-choice').textContent = '';
  });

// Computer choice
function computerChoice() { 
	const options = ['rock', 'paper', 'scissors'];
	const randomNumber = Math.floor(Math.random() * 3);
	return options[randomNumber];
}

// Play round
function playRound(playerSelection) {
	const computerSelection = computerChoice();
	if (playerSelection === computerSelection) {
		result.textContent = 'Tie!';
	} else if (playerSelection === 'rock' && computerSelection === 'scissors' || 
		playerSelection === 'paper' && computerSelection === 'rock' || 
		playerSelection === 'scissors' && computerSelection === 'paper') {
		result.textContent = 'You win!';
		pScore++;
		playerScore.textContent = pScore;
	} else {
		result.textContent = 'You lose!';
		cScore++;
		computerScore.textContent = cScore;
	}

    document.getElementById('player-choice').textContent = playerSelection;
	document.getElementById('computer-choice').textContent = computerSelection;
}

// Event listeners for buttons
choices.forEach(choice => {
	choice.addEventListener('click', () => {
		playRound(choice.id);
	});
});
