const continueGame = () => {
  // Display random char on the big screen in the playground
  const alphabet = getRandomAlphabet();
  document.getElementById('current-alphabet').innerText = alphabet;

  // Set background color of the key of displayed char on the screen
  setBackgroundColorById(alphabet, 'orange');
};

const play = () => {
  hideElementById('home-screen');
  hideElementById('scoreBoard');
  showElementById('play-ground');

  // reset the life and score counts from previous rounds(if played)
  document.getElementById('life').innerText = 5;
  document.getElementById('score').innerText = 0;

  continueGame();
};

const handleKeyboardKeyUp = (event) => {
  const playerPressed = event.key;
  if (playerPressed === 'Enter') {
    if (!document.getElementById('home-screen').classList.contains('hidden')) {
      play();
    }
  } else if (playerPressed === 'Escape') {
    gameOver();
  } else {
    // The 'key' player is expected to press according to big screen
    const currentAlphabetElement = document.getElementById('current-alphabet').innerText;
    const currentAlphabet = currentAlphabetElement.toLocaleLowerCase();

    if (playerPressed === currentAlphabet) {
      const currentScore = getTextElementValueById('score');
      const updatedScore = currentScore + 1;
      document.getElementById('score').innerText = updatedScore;
      removeBackgroundColorById(currentAlphabet);

      continueGame();
    } else {
      const currentLife = getTextElementValueById('life');
      const updatedLife = currentLife - 1;
      document.getElementById('life').innerText = updatedLife;
      if (updatedLife === 0) {
        gameOver();
      }
    }
  }
};

const gameOver = () => {
  hideElementById('play-ground');
  showElementById('scoreBoard');

  const lastScore = document.getElementById('score').innerText;
  document.getElementById('final-score').innerText = lastScore;

  // clear the last alphabet highlight on keyboard
  const alphabet = document.getElementById('current-alphabet').innerText;
  removeBackgroundColorById(alphabet);

  // reset the life and score counts
  // document.getElementById('life').innerText = 5;
  // document.getElementById('score').innerText = 0;
};

document.addEventListener('keyup', handleKeyboardKeyUp);
