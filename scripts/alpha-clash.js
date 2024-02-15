const play = () => {
  document.getElementById('home-screen').classList.add('hidden');
  document.getElementById('play-ground').classList.remove('hidden');

  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = alphabetString.split('');
  console.log(alphabets);

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];
  document.getElementById('current-alphabet').innerText = alphabet;

  document.getElementById(alphabet).style.backgroundColor = 'orange';
};
