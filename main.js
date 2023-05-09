
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playRound(button.id));
    });
});

const container = document.querySelector('.container');
const div = document.createElement('div');
container.appendChild(div);


let myArray = ['rock', 'paper', 'scissors'];


function getComputerChoice(myArray) {
    let selectRandom = Math.floor(Math.random() * myArray.length);
    return myArray[selectRandom];
 } 

function playRound(playerSelection, computerSelection) { //syntax burrowed from TOP example
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return alert('You win!' + ' Rock beats scissors.');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return('You win!' + ' Paper beats rock.');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return('You win!' + ' Scissors beats paper.');
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return('You lose!' + ' Paper beats rock'); 
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return('You lose!' + ' Scissors beats paper.');
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return('You lose!' + ' Rock beats scissors'); 
    } else {
        return('It\'s a tie! Play again.')
    }
}

function game() { //burrowed from ChatGPT 
    let playerScore = 0;
    let computerScore = 0;

    /* for (let i = 1; i <= 5; i++) {
        const playerSelection = prompt(`Round ${i}: Choose, rock, paper or scissors`).toLowerCase();
        const computerSelection = getComputerChoice(myArray);
        const roundResult = playRound(playerSelection, computerSelection);

        console.log(roundResult);

        if (roundResult.includes('You win!')) {
            playerScore++;
        } else if (roundResult.includes('You lose!')) {
            computerScore++;
        }
    }
    */

    console.log(`Final score: Player ${playerScore} - ${computerScore} Computer`)

    if (playerScore > computerScore) {
        console.log('Congratulations! You won the game.');
    } else if (playerScore < computerScore) {
        console.log('Sorry, you lost the game.');
    } else {
        console.log('The game was a tie.');
    }
}

game();




// const playerSelection = prompt('Let\'s play rock, paper scissors. Type your hand position below').toLowerCase();
// const computerSelection = getComputerChoice(myArray);