import { gameProcess } from '..';
import { getRandomNumber, cons } from '../utils';

const gameDescription = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";
const isPrime = (question) => {
  const iter = (acc) => {
    if (acc === question) {
      return true;
    }
    if (question % acc === 0) {
      return false;
    }
    return iter(acc + 1);
  };
  return iter(2);
};

const getTrueAnswer = question => ((isPrime(question)) ? 'yes' : 'no');

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(2, 99);
  const trueAnswer = getTrueAnswer(question);
  return cons(`${question}`, trueAnswer);
};

export default () => {
  gameProcess(gameDescription, getQuestionAndAnswer);
};
