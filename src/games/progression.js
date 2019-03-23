import { gameProcess } from '..';
import { getRandomNumber, cons } from '../utils';

const gameDescription = 'What number is missing in the progression?';
const lengthProgression = 10;

const genGameData = () => {
  const startElement = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 20);
  const hiddenElementIndex = getRandomNumber(0, lengthProgression - 1);
  const trueAnswer = startElement + step * hiddenElementIndex;
  let stringElements = '';

  for (let i = 0; i < lengthProgression; i += 1) {
    const currentElement = startElement + step * i;
    if (i === hiddenElementIndex) {
      stringElements = `${stringElements} ..`;
    } else stringElements = `${stringElements} ${currentElement}`;
  }
  const question = stringElements;
  return cons(question, trueAnswer);
};

export default () => {
  gameProcess(gameDescription, genGameData);
};
