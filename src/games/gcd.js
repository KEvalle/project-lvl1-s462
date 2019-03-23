import { gameProcess } from '..';
import { getRandomNumber, cons } from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const calculateGCD = (n, m) => {
  if (m > 0) {
    return calculateGCD(m, n % m);
  } return Math.abs(n);
};

const genGameData = () => {
  const One = getRandomNumber(1, 99);
  const Two = getRandomNumber(1, 99);
  const question = `${One}:${Two}`;
  const trueAnswer = calculateGCD(One, Two);
  return cons(question, trueAnswer);
};

export default () => {
  gameProcess(gameDescription, genGameData);
};
