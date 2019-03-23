import { gameProcess } from '..';
import { getRandomNumber, cons } from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const calculateGCD = (n, m) => {
  if (m > 0) {
    return calculateGCD(m, n % m);
  } return Math.abs(n);
};

const generateGameData = () => {
  const one = getRandomNumber(1, 99);
  const two = getRandomNumber(1, 99);
  const question = `${one}:${two}`;
  const trueAnswer = calculateGCD(one, two);
  return cons(question, trueAnswer);
};

export default () => {
  gameProcess(gameDescription, generateGameData);
};
