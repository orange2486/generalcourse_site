const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const resultText = document.getElementById('result');
const restartButton = document.getElementById('restartButton');

let correctNumber = 76; 

function startGame() {
    resultText.textContent = '';
    guessInput.value = '';
    guessInput.disabled = false;
    guessButton.disabled = false;
    restartButton.style.display = 'none';
}

guessButton.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);

    if (userGuess < 1 || userGuess > 100) {
        resultText.textContent = '請輸入 1 到 100 的數字！';
    } else if (userGuess === correctNumber) {
        resultText.textContent = '恭喜你！你猜對了！';
        guessInput.disabled = true;
        guessButton.disabled = true;
        restartButton.style.display = 'inline';
    } else if (userGuess < correctNumber) {
        resultText.textContent = '太小了！再試一次。';
    } else {
        resultText.textContent = '太大了！再試一次。';
    }
});

restartButton.addEventListener('click', startGame);

// 開始遊戲
startGame();
