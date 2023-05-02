let myArray = ['Rock', 'Paper', 'Scissors'];


function getComputerChoice(myArray) {
    let selectRandom = Math.floor(Math.random() * myArray.length);
    return myArray[selectRandom];
 } 
 
 function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return('You Win! Rock beats scissors.');
    } if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return('You Win! Paper beats Rock.');
    } if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return('You Win! Scissors beats Paper.');
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return('You Lose! Paper beats Rock'); 
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return('You lose! Scissors beats Paper.');
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return('You lose! Rock beats Scissors'); 
    } else {
        return('It\'s a tie! Try again.');
    }
 }

const playerSelection = prompt('Choose Rock, Paper, or Scissors') 

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


const computerSelection = getComputerChoice(myArray);
console.log(playRound(playerSelection, computerSelection));