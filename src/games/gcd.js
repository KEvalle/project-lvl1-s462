import { gameProcess } from '..';
import { getRandomNumber, cons } from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const calculateNOD = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return calculateNOD(m, k);
  } return Math.abs(n);
};

const getQuestionAndAnswer = () => {
  const One = getRandomNumber(1, 99);
  const Two = getRandomNumber(1, 99);
  const question = `${One}:${Two}`;
  const trueAnswer = calculateNOD(One, Two);
  return cons(question, trueAnswer);
};

export default () => {
  gameProcess(gameDescription, getQuestionAndAnswer);
};
