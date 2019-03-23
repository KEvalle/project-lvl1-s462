import { gameProcess } from '..';
import { getRandomNumber, cons } from '../utils';

const gameDescription = "Answer 'yes' if number even otherwise answer 'no'.";
const isEven = number => number % 2 === 0;

const genGameData = () => {
  const question = getRandomNumber(1, 99);
  const trueAnswer = ((isEven(question)) ? 'yes' : 'no');
  return cons(question, trueAnswer);
};

export default () => {
  gameProcess(gameDescription, genGameData);
};
