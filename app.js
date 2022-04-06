let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
      const choices = ['p', 's', 'r'];
      const randomNumber = Math.floor(Math.random()*3);      
      return choices[randomNumber];
}

function convertToWord(letter){
      if (letter === "r")
            return "Rock";
      else if (letter === "p")
            return "Paper";
      else
            return "Scissors";
}

function win(userChoice, computerChoice){
      const smallUserWord = "user".fontsize(3).sub();
      const smallComputerWord = "comp".fontsize(3).sub();
      const userChoice_div = document.getElementById(userChoice);
      userScore++;
      userScore_span.innerHTML = userScore;
      computerScore_span.innerHTML = computerScore;
      result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallComputerWord}. You Won!`
      userChoice_div.classList.add('green-glow');
      setTimeout(() => userChoice_div.classList.remove('green-glow'), 350);

}

function lose(userChoice, computerChoice){
      const smallUserWord = "user".fontsize(3).sub();
      const smallComputerWord = "comp".fontsize(3).sub();
      const userChoice_div = document.getElementById(userChoice);
      computerScore++;
      userScore_span.innerHTML = userScore;
      computerScore_span.innerHTML = computerScore;
      result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallComputerWord}. You Lost!`
      userChoice_div.classList.add('red-glow');
      setTimeout(() =>  userChoice_div.classList.remove('red-glow'), 350);

}

function draw(userChoice, computerChoice){
      const smallUserWord = "user".fontsize(3).sub();
      const smallComputerWord = "comp".fontsize(3).sub();
      const userChoice_div = document.getElementById(userChoice);
      result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallComputerWord}. A Draw!`
      userChoice_div.classList.add('gray-glow');
      setTimeout(() => userChoice_div.classList.remove('gray-glow'), 350);

}

function game(userChoice){
      const computerChoice = getComputerChoice();
      console.log(userChoice + computerChoice);
      switch(userChoice + computerChoice){
            case "rs":
            case "pr":
            case "sp":
                  win(userChoice, computerChoice);
                  break;
            case "sr":
            case "rp":
            case "ps":
                  lose(userChoice, computerChoice);
                  break;
            case "rr":
            case "pp":
            case "ss":
                  draw(userChoice, computerChoice);
                  break;
      }
}

function main(){
      rock_div.addEventListener('click', () => game("r"));
      paper_div.addEventListener('click', () => game("p"));
      scissors_div.addEventListener('click', () => game("s"));
}

main();