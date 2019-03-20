import { gameProcess } from '..';
import { getRandomNumber, cons } from '../utils';

const textGameDescription = "Answer 'yes' if number even otherwise answer 'no'.";
const isEven = question => question % 2 === 0;
const getTrueAnswer = question => ((isEven(question)) ? 'yes' : 'no');

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 99);
  const trueAnswer = getTrueAnswer(question);
  return cons(`${question}`, trueAnswer);
};

export default () => {
  gameProcess(textGameDescription, getQuestionAndAnswer);
};
