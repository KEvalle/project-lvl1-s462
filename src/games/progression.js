import { gameProcess } from '..';
import { getRandomNumber, cons } from '../utils';

const gameDescription = 'What number is missing in the progression?';
const lengthProgression = 10;

const getQuestionAndAnswer = () => {
  const startElement = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 20);
  const indexHide = getRandomNumber(1, 10);
  let question = '';
  let counterHide = 0;
  let trueAnswer;
  const upBorderOfElements = startElement + step * lengthProgression;

  for (let counter = startElement; counter < upBorderOfElements; counter += step) {
    counterHide += 1;
    if (counterHide === indexHide) {
      trueAnswer = counter;
      question += ' ..';
    } else question += ` ${counter}`;
  }
  return cons(question, trueAnswer);
};

export default () => {
  gameProcess(gameDescription, getQuestionAndAnswer);
};
