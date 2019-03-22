import { gameProcess } from '..';
import { getRandomNumber, cons } from '../utils';

const gameDescription = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";
const nnum = (question = 0) => {
  if (question < 2) {
    return false;
  }
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

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 99);
  const trueAnswer = (nnum(question) ? 'yes' : 'no');
  return cons(question, trueAnswer);
};

export default () => {
  gameProcess(gameDescription, getQuestionAndAnswer);
};
