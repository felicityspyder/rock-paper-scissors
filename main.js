
/* const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playerSelection = button.id);
    });
});*/


const myArray = ['rock', 'paper', 'scissors'];


function getComputerSelection(myArray) {
    let selectRandom = Math.floor(Math.random() * myArray.length);
    return myArray[selectRandom];
} 

let computerSelection = getComputerSelection(myArray);
let playerSelection;

function getPlayerSelection() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.id;
            playRound();
        });
    });
}

function getResult(playerSelection, computerSelection) { //syntax burrowed from TOP example
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return ('You win!' + ' Rock beats scissors.');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return ('You win!' + ' Paper beats rock.');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return ('You win!' + ' Scissors beats paper.');
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return ('You lose!' + ' Paper beats rock'); 
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return ('You lose!' + ' Scissors beats paper.');
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return ('You lose!' + ' Rock beats scissors'); 
    } else {
        return ('It\'s a tie! Play again.')
    }
}

function playRound() {
    computerSelection = getComputerSelection(myArray); // computer will always select the same argument otherwise
    const result = getResult(playerSelection, computerSelection);
    console.log(result);
}

getPlayerSelection();

const container = document.querySelector('.container');
const div = document.createElement('div');
container.appendChild(div);


