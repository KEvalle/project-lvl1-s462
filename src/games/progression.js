import { gameProcess } from '..';
import { getRandomNumber, cons } from '../utils';

const gameDescription = 'What number is missing in the progression?';
const lengthProgression = 10;

const getQuestionAndAnswer = () => {
  const startElement = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 20);
  const indexHide = getRandomNumber(0, lengthProgression - 1);
  let question = '';
  let trueAnswer;

  for (let i = 0; i < lengthProgression; i += 1) {
    const progressionElement = startElement + step * i;
    if (i === indexHide) {
      trueAnswer = progressionElement;
      question = `${question} ..`;
    } else question = `${question} ${progressionElement}`;
  }
  return cons(question, trueAnswer);
};

export default () => {
  gameProcess(gameDescription, getQuestionAndAnswer);
};
