const play = () => {
  hideElementById('home-screen');
  showElementById('play-ground');

  const alphabet = getRandomAlphabet();
  document.getElementById('current-alphabet').innerText = alphabet;

  setBackgroundColorById(alphabet, 'orange');
};
