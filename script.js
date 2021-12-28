
// playerSelection must select one of the three options (convert to all lower case)
function playerSelection(){
    user = window.prompt("Enter your choice here: ");
    user_lower = user.toLowerCase();
    return user_lower;
}
const person = playerSelection();

// computerPlay must return either rock, paper or scissors randomly
function computerPlay(){
    let choice = ["rock", "paper", "scissor"];
    let choices = choice[Math.floor(Math.random()*choice.length)];
    return choices;
}
const computer = computerPlay();

//if statement and OR operator to compare the two values and to determine a winner
// use a counter to keep track of score and to announce a winner
let userScore = 0
let computerScore = 0
let draw = 0
    
function playRound(playerSelection, computerPlay){
    if (playerSelection == computerPlay){
        console.log("This game is a draw!"); draw++;
    } else if ((playerSelection == "rock" && computerPlay == "scissors") || 
    (playerSelection == "scissors" && computerPlay == "paper") || 
    (playerSelection == "paper" && computerPlay == "rock"))
{ console.log("The user won!"); userScore++;
} else if ((computerPlay == "rock" && playerSelection == "scissors") || 
(computerPlay == "scissors" && playerSelection == "paper") ||
(computerPlay == "paper" && playerSelection == "rock")
){ console.log("The computer won!"); computerScore++;
 }
}
// use loop to make game play 5 times (not covered yet so will revisit later)
console.log(playRound(person, computer));

