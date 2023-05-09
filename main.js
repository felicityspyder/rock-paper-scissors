
/* const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playerSelection = button.id);
    });
});*/


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


const container = document.querySelector('.container');
const div = document.createElement('div');
container.appendChild(div);


let myArray = ['rock', 'paper', 'scissors'];


function getComputerSelection(myArray) {
    let selectRandom = Math.floor(Math.random() * myArray.length);
    return myArray[selectRandom];
} 


const computerSelection = getComputerSelection(myArray);

function playRound() {
    const result = getResult(playerSelection, computerSelection);
    console.log(result);
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
getPlayerSelection();



