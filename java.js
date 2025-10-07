    let scores = {}; // Player scores dictionary
    let randomDigit = Math.floor(Math.random() * 5);

    const nameInput = document.getElementById("playerName");
    const guessInput = document.getElementById("guessInput");
    const message = document.getElementById("message");
    const guessBtn = document.getElementById("guessBtn");
    const scoreList = document.getElementById("scoreList");

    function updateScoreboard() {
      scoreList.innerHTML = "";
      for (let player in scores) {
        const li = document.createElement("li");
        li.textContent = player + ": " + scores[player] + " points";
        scoreList.appendChild(li);
      }
    }

    guessBtn.addEventListener("click", () => {
      const name = nameInput.value.trim();
      const guess = Number(guessInput.value);

      if (!name) {
        message.textContent = "Please enter your name.";
        return;
      }
      if (guess < 0 || guess > 9 || isNaN(guess)) {
        message.textContent = "Enter a valid guess between 0 and 5.";
        return;
      }

      if (guess === randomDigit) {
        message.textContent = `Correct! Well done, ${name}.`;
        scores[name] = (scores[name] || 0) + 1;
        randomDigit = Math.floor(Math.random() * 5); // New number
      } else {
        message.textContent = `Wrong guess, ${name}. Try again!`;
      }

      updateScoreboard();
      guessInput.value = "";
      guessInput.focus();
    });