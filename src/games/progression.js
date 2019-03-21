import { gameProcess } from '..';
import { getRandomNumber, cons } from '../utils';

const gameDescription = 'What number is missing in the progression?';
const lengthProgression = 10;

const getQuestionAndAnswer = () => {
  let progression = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 20);
  const indexHide = getRandomNumber(1, 10);
  let question = '';
  let trueAnswer;

  for (let counter = 1; counter <= lengthProgression; counter += 1) {
    if (counter === indexHide) {
      trueAnswer = progression;
      question += ' ..';
    } else question += ` ${progression}`;
    progression += step;
  }
  return cons(question, trueAnswer);
};

export default () => {
  gameProcess(gameDescription, getQuestionAndAnswer);
};
