const hideElementById = (elementId) => {
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
};

const showElementById = (elementId) => {
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
};

const getRandomAlphabet = () => {
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = alphabetString.split('');

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];
  return alphabet;
};

const setBackgroundColorById = (elementId, color) => {
  const element = document.getElementById(elementId);
  element.style.backgroundColor = color;
};

const removeBackgroundColorById = (elementId) => {
  const element = document.getElementById(elementId);
  element.style.backgroundColor = '';
};

const getTextElementValueById = (elementId) => {
  const elementTextValue = document.getElementById(elementId).innerText;
  const value = parseInt(elementTextValue);
  return value;
};
