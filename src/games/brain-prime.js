import readlineSync from 'readline-sync';
import {
  bodyGame, checkAnswer, getNumber, showMessage, showQuestion, startGame,
} from '../index.js';

const brainPrime = () => {
  const game = 'prime';
  const name = startGame('Answer "yes" if given number is prime. Otherwise answer "no".');
  bodyGame(name, () => {
    const number = getNumber();
    showQuestion(game, number);
    const answer = readlineSync.question('Your answer: ');
    const message = checkAnswer(name, answer, () => {
      let correctAnswer = number !== 1;
      for (let i = 2; i < number; i += 1) {
        correctAnswer *= number % i !== 0;
      }
      return correctAnswer ? 'yes' : 'no';
    });
    showMessage(message);
    return message;
  });
};

export default brainPrime;
