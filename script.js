//availabe options
let choice = ['rock','paper','scissors']

function computerPlay(){
    return choice[Math.floor(Math.random() * choice.length)];
}

let playerSelection = prompt('Enter options- rock, paper or scissors').toLowerCase()
let computerSelection = computerPlay()
let result;

function roundPlay(playerSelection, computerSelection){
    
    if(playerSelection == 'rock' & computerSelection == 'rock'||
       playerSelection == 'paper' & computerSelection == 'paper' ||
       playerSelection == 'paper' & computerSelection == 'paper'){
        return result ='draw';
        
    }
    if(playerSelection == 'rock' & computerSelection == 'paper'||
       playerSelection == 'paper' & computerSelection == 'scissors'||
       playerSelection == 'scissors' & computerSelection == 'rock'){
        return result='lose';
        
    }
    if(playerSelection == 'rock' & computerSelection == 'scissors'||
       playerSelection == 'paper' & computerSelection == 'rock'||
       playerSelection == 'scissors' & computerSelection == 'paper'){
        return result = 'win';
        
    }
}



function game() {
    roundPlay(playerSelection, computerSelection)
    let playerScore =0;
    let computerScore=0; 
    result;
   
    for(i = 0; i < 2; i++) {
        console.log("Player picked " + playerSelection); 
        console.log("Computer picked " + computerSelection);
     
        if(result == 'win') { 
            playerScore += 1;
        }

        else if(result == 'lose') { 
            computerScore += 1;
        }

        else { 
            playerScore += 1;
            computerScore += 1;
        }

    }
    if(playerScore > computerScore){
        console.log('player wins');
    }
    else if(playerScore < computerScore){
        console.log('COM wins');
    }
    else{
        console.log('its a tie');
    }
    
}
game();





