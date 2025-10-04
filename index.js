const winners = {
  "rock": "scissors",
  "paper": "rock",
  "scissors": "paper",
};

let humanScore = 0, computerScore = 0;


function makeChoice(choice) {
    
    switch(choice) {

        case 0: {
            return "rock";
        }

        case 1: {
            return "paper";
        }

        case 2: {
            return "scissors";
        }

        default: {
            return "Invalid Choice!";
        }
    }
}
function randomGenerateChoice() {
    return makeChoice(Math.round(Math.random() * 2));
}



function getComputerChoice() {
    return randomGenerateChoice();
}


function getHumanChoice() {
 return window.prompt("Choose: rock, paper, or scissors").toLowerCase();
}

function playRound(humanChoice, computerChoice) {

    // Does this choice exist?
    if(!winners[humanChoice]) {
        console.log("Invalid choice!");
        return playRound(getHumanChoice(), getComputerChoice());
    }
    // Did player win?
    if(winners[humanChoice] === computerChoice) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats cpu:${computerChoice}!`);
    }

    // Did cpu win?
    else if (winners[computerChoice] === humanChoice) {
        computerScore++;
        console.log(`You lose! cpu:${computerChoice} beats ${humanChoice}!`);
    }

    // If no winners, must be tie
    else {
        console.log(`Tie Game!, both have chosen ${humanChoice}, cpu:${computerChoice}!`);
    }

}


function playGame() {
    for(let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if(humanScore > computerScore) {
        console.log(`Congratulations! You won ${humanScore}-${computerScore}!`)
    } else {
        console.log(`Sorry! You lost ${humanScore}-${computerScore}!`)
    }
    
}

playGame();
