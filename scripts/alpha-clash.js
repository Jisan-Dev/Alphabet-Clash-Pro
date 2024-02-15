const continueGame = () => {
  // Display random char on the big screen in the playground
  const alphabet = getRandomAlphabet();
  document.getElementById('current-alphabet').innerText = alphabet;

  // Set background color of the key of displayed char on the screen
  setBackgroundColorById(alphabet, 'orange');
};

const play = () => {
  hideElementById('home-screen');
  showElementById('play-ground');
  continueGame();
};

const handleKeyboardKeyUp = (event) => {
  const playerPressed = event.key;
  if (playerPressed === 'Enter') {
    if (!document.getElementById('home-screen').classList.contains('hidden')) {
      play();
    }
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
};

document.addEventListener('keyup', handleKeyboardKeyUp);
