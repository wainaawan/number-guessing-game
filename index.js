

// Secret number from 1 to 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const guess = parseInt(document.getElementById("userGuess").value);

    if (!guess || guess < 1 || guess > 10) {
        alert("⚠ Please enter a number between 1 and 10.");
        return;
    }

    if (guess === secretNumber) {
        alert("🎉 You Won!");
    } else {
        alert("❌ Try Again!");
    }
}
