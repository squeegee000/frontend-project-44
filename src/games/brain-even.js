import readlineSync from 'readline-sync';
import {
  bodyGame, checkAnswer, getNumber, showMessage, showQuestion, startGame,
} from '../index.js';

const brainEven = () => {
  const game = 'even';
  const name = startGame('Answer "yes" if the number is even, otherwise answer "no".');
  bodyGame(name, () => {
    const number = getNumber();
    showQuestion(game, number);
    const answer = readlineSync.question('Your answer: ');
    const message = checkAnswer(name, answer, () => (number % 2 === 0 ? 'yes' : 'no'));
    showMessage(message);
    return message;
  });
};

export default brainEven;
