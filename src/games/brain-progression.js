import readlineSync from 'readline-sync';
import {
  bodyGame, checkAnswer, getProgression, showMessage, showQuestion, startGame,
} from '../index.js';

const brainProgression = () => {
  const game = 'progression';
  const name = startGame('What number is missing in the progression?');
  bodyGame(name, () => {
    const progression = getProgression();
    const hiddenElement = progression.pop();
    showQuestion(game, progression);
    const answer = readlineSync.question('Your answer: ');
    const message = checkAnswer(name, answer, () => hiddenElement);
    showMessage(message);
    return message;
  });
};

export default brainProgression;
