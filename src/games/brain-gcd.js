import readlineSync from 'readline-sync';
import {
  bodyGame, checkAnswer, getNumber, showMessage, showQuestion, startGame,
} from '../index.js';

const brainGcd = () => {
  const game = 'gcd';
  const name = startGame('Find the greatest common divisor of given numbers.');
  bodyGame(name, () => {
    const number1 = getNumber() === 0 ? getNumber() + 1 : getNumber();
    const number2 = getNumber() === 0 ? getNumber() + 1 : getNumber();
    showQuestion(game, number1, number2);
    const answer = readlineSync.question('Your answer: ');
    const message = checkAnswer(name, answer, () => {
      let maxNum = Math.max(number1, number2);
      let minNum = Math.min(number1, number2);
      while (maxNum - minNum !== 0) {
        const var1 = maxNum - minNum;
        maxNum = Math.max(var1, minNum);
        minNum = Math.min(var1, minNum);
      }
      return maxNum !== 0 ? maxNum : 1;
    });
    showMessage(message);
    return message;
  });
};

export default brainGcd;
