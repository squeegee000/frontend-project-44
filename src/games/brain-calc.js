import readlineSync from 'readline-sync';
import {
  bodyGame, checkAnswer, getNumber, getOperation, showMessage, showQuestion, startGame,
} from '../index.js';

const brainCalc = () => {
  const game = 'calc';
  const name = startGame('What is the result of the expression?');
  bodyGame(name, () => {
    const factor1 = getNumber();
    const factor2 = getNumber();
    const operation = getOperation();
    showQuestion(game, factor1, operation, factor2);
    const answer = readlineSync.question('Your answer: ');
    const message = checkAnswer(name, answer, () => {
      let correctAnswer = 0;
      if (operation === '+') {
        correctAnswer = factor1 + factor2;
      } else if (operation === '-') {
        correctAnswer = factor1 - factor2;
      } else if (operation === '*') {
        correctAnswer = factor1 * factor2;
      }
      return correctAnswer;
    });
    showMessage(message);
    return message;
  });
};

export default brainCalc;
