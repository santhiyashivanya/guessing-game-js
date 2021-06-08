const randomNumber = Math.floor(Math.random()*99+1);
const userGuess = document.querySelector("#input");
const resultDiv = document.querySelector(".result");
const historyDiv = document.querySelector(".history");



historyDiv.innerHTML = "";

let chances = 5;

let isWin = false;

function game() {
    let result;
    let guess = userGuess.value;
    if (guess > 100 || guess < 1) {
        result = "Guess a number between 1 and 100";
        resultDiv.innerHTML = `<h4>${result}</h4>`;
    }else if (chances && !isWin) {
        let guess = userGuess.value;
        if (randomNumber == guess) {
            result = "You won!";
            isWin = true;
        } else if (randomNumber < guess) {
            if (chances == 1) {
                result = `Game Over!<br>The Number is ${randomNumber}`;
            }else {
                result = "You too high";
            }
        }else {
            if (chances == 1) {
                result = `Game Over!<br>The Number is ${randomNumber}`;
            }else {
                result = "You too low!";
            }
        }
        chances--;
        historyDiv.innerHTML += `<h4>You Guessed ${guess}</h4>`;
        return resultDiv.innerHTML = `<h4>${result}</h4>`;
    }

}


function reload() {
    if (!chances || isWin) {
        location.reload();
    }
}