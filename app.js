let userScore = 0 
let computerScore = 0 

const userScore_span = document.getElementById("user-score") 
const computerScore_span = document.getElementById("computer-score") 
const result_p = document.querySelector(".result > p") 
const rock_div = document.getElementById("r") 
const paper_div = document.getElementById("p") 
const scissors_div = document.getElementById("s") 

function getComputerChoice() {
      const choices = ['p', 's', 'r'] 
      const randomNumber = Math.random() * 3 
      const randomNumberInt = Math.floor(randomNumber) 
      return choices[randomNumberInt] 
}

function gamePoint() {
      let score 
      if (userScore == 5) {
            userScore = 0 
            computerScore = 0 
            computerScore_span.innerHTML = '0' 
            userScore_span.innerHTML = '0' 
            result_p.innerHTML = "You Won!"
            score = 1 
            return score 
      }
      else if (computerScore == 5) {
            userScore = 0 
            computerScore = 0 
            computerScore_span.innerHTML = '0' 
            userScore_span.innerHTML = '0' 
            result_p.innerHTML = "You Lost!"
            score = 1 
            return score 
      }
      else {
            result_p.innerHTML = ' '
      }
      return score 
}

function win(userChoice, temp) {
      const userChoice_div = document.getElementById(userChoice) 
      if (temp != 1) {
            userScore++ 
            computerScore_span.innerHTML = computerScore 
            userScore_span.innerHTML = userScore 
            const userChoice_divController = userChoice_div.classList 
            userChoice_divController.add('green-glow') 
            setTimeout(() => userChoice_divController.remove('green-glow'), 350) 
      }
}

function lose(userChoice, temp) {
      const userChoice_div = document.getElementById(userChoice) 
      if (temp != 1) {
            computerScore++ 
            userScore_span.innerHTML = userScore 
            computerScore_span.innerHTML = computerScore 
            const userChoice_divController = userChoice_div.classList 
            userChoice_div.classList.add('red-glow') 
            setTimeout(() => userChoice_divController.remove('red-glow'), 350) 
      }
}

function draw(userChoice) {
      const userChoice_div = document.getElementById(userChoice) 
      const userChoice_divController = userChoice_div.classList 
      userChoice_divController.add('gray-glow') 
      setTimeout(() => userChoice_divController.remove('gray-glow'), 350) 
}

function game(userChoice) {
      const computerChoice = getComputerChoice() 
      let temp = gamePoint()
      const choice = userChoice + computerChoice 
      switch (choice) {
            case "rs": case "pr": case "sp":
                  win(userChoice, temp) 
                  break 
            case "sr": case "rp": case "ps":
                  lose(userChoice, temp) 
                  break 
            case "rr": case "pp": case "ss":
                  draw(userChoice) 
                  break 
      }
}

function main() {
      rock_div.addEventListener('click', () => game("r")) 
      paper_div.addEventListener('click', () => game("p")) 
      scissors_div.addEventListener('click', () => game("s")) 
}

main() 