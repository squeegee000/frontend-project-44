import readlineSync from 'readline-sync';

export const getNumber = () => Math.floor(Math.random() * 100);

export const startGame = (condition) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(condition);
  return name;
};

export const bodyGame = (name, body) => {
  let i = 0;
  while (i < 3) {
    const message = body();
    if (message === 'Correct!') {
      i += 1;
    } else {
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export const checkAnswer = (name, answer, body) => {
  const correctAnswer = body();
  let message;
  if (answer === String(correctAnswer)) {
    message = 'Correct!';
  } else {
    message = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;
  }
  return message;
};

export const getOperation = () => '+-*'[Math.floor(Math.random() * 3)];

export const getProgression = () => {
  const progression = [];
  const length = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  const element = Math.floor(Math.random() * length);
  const step = Math.floor(Math.random() * (6 - 1)) + 1;
  let start = getNumber();
  const check = start + ((length - 1) * step);
  if (check > 100) {
    start -= check - 100;
  }
  for (let i = start; i <= start + ((length - 1) * step); i += step) {
    progression.push(i);
  }
  progression.push(progression[element]);
  progression[element] = '..';
  return progression;
};

export const showQuestion = (gameName, elem1, elem2 = null, elem3 = null) => {
  switch (gameName) {
    case 'calc':
      console.log(`Question: ${elem1} ${elem2} ${elem3}`);
      break;
    case 'even':
      console.log(`Question: ${elem1}`);
      break;
    case 'prime':
      console.log(`Question: ${elem1}`);
      break;
    case 'gcd':
      console.log(`Question: ${elem1} ${elem2}`);
      break;
    case 'progression':
      console.log(`Question: ${elem1.join(' ')}`);
      break;
    default:
      console.log('No questions today :D');
  }
};

export const showMessage = (message) => console.log(message);
