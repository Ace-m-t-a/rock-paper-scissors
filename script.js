function computerPlay(){
    let choice = ["rock", "paper", "scissor"];
    let choices = choice[Math.floor(Math.random()*choice.length)];
    return choices;
}
let userScore = 0;
let computerScore = 0;
let draw = 0;

function playRound(playerSelection, computerPlay){
    if (playerSelection == computerPlay){
        console.log("This game is a draw!"); draw = draw++;
    } else if ((playerSelection == "rock" && computerPlay == "scissors") || 
    (playerSelection == "scissors" && computerPlay == "paper") || 
    (playerSelection == "paper" && computerPlay == "rock"))
{ console.log("The user won!"); userScore = userScore++;
} else if ((computerPlay == "rock" && playerSelection == "scissors") || 
(computerPlay == "scissors" && playerSelection == "paper") ||
(computerPlay == "paper" && playerSelection == "rock")
){ console.log("The computer won!");computerScore = computerScore++;
 }
}

document.getElementById("myBtn1").addEventListener("click",myFunction => {
    playRound("paper", computerPlay())
    if(computerPlay == "paper"){
        draw++;
    }else if (computerPlay == "rock"){
        userScore++;
    } else if(computerPlay == "scissors"){
        computerScore++;
    }
})

document.getElementById("myBtn2").addEventListener("click", myFunction => {
    playRound("rock", computerPlay())
})

document.getElementById("myBtn3").addEventListener("click", myFunction => {
    playRound("scissors", computerPlay())
})
// need to add DOM to change console.log to on div displaying results, come back to fix this issue


const divider = document.querySelector('#container');
const div1 = document.createElement('div');
divider.classList.add('divider')
divider.appendChild(div1)
document.getElementById("container").style.border = "thick solid #000000";
document.getElementById("container").style.backgroundColor = "blue";

const header1 = document.createElement('h1');
header1.classList.add('header1');
header1.textContent = "The user has this many wins: " + userScore;
div1.appendChild(header1)

const header2 = document.createElement('h1');
header2.classList.add('header2');
header2.textContent = "The computer has this many wins: " + computerScore;
div1.appendChild(header2)

const header3 = document.createElement('h1');
header3.classList.add('header3');
header3.textContent = "The user has this many wins: " + draw;
div1.appendChild(header3)
