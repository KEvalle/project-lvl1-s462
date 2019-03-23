import { gameProcess } from '..';
import { getRandomNumber, cons } from '../utils';

const gameDescription = 'What number is missing in the progression?';
const lengthProgression = 10;

const getQuestion = (startElement, step, hiddenElementIndex) => {
  let stringProgression = '';
  for (let i = 0; i < lengthProgression; i += 1) {
    if (i === hiddenElementIndex) {
      stringProgression = `${stringProgression} ..`;
    } else {
      const currentElement = startElement + step * i;
      stringProgression = `${stringProgression} ${currentElement}`;
    }
  }
  return stringProgression;
};

const generateGameData = () => {
  const startElement = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 20);
  const hiddenElementIndex = getRandomNumber(0, lengthProgression - 1);
  const trueAnswer = startElement + step * hiddenElementIndex;
  const question = getQuestion(startElement, step, hiddenElementIndex);
  return cons(question, trueAnswer);
};

export default () => {
  gameProcess(gameDescription, generateGameData);
};
