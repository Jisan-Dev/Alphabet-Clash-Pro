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
