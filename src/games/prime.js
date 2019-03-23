import { gameProcess } from '..';
import { getRandomNumber, cons } from '../utils';

const gameDescription = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const genGameData = () => {
  const question = getRandomNumber(1, 99);
  const trueAnswer = (isPrime(question) ? 'yes' : 'no');
  return cons(question, trueAnswer);
};

export default () => {
  gameProcess(gameDescription, genGameData);
};
