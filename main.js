let myArray = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(myArray) {
    let selectRandom = Math.floor(Math.random() * myArray.length);
    return myArray[selectRandom];
 } 
 
 function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return('You Win! Rock beats scissors.');
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return('You Lose! Rock beats Paper'); 
    } else {
        return('It\'s a tie! You both selected Rock. Try again.');
    } if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return('You Win! Paper beats Rock.');
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return('You lose! Scissors beats Paper.');
    } else { 
        return('It\'s a tie! You both selected Paper. Try again.')
    } if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return('You Win! Scissors beats Paper.');
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return('You lose! Rock beats Scissors'); 
    } else {
        return('It\'s a tie! You both selected Scissors. Try again.')
    }   
}

const playerSelection = "rock";
const computerSelection = getComputerChoice(myArray);
console.log(playRound(playerSelection, computerSelection));