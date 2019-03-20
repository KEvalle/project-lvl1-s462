import { gameProcess } from '..';
import { getRandomNumber, cons } from '../utils';

const textGameDescription = 'What is the result of the expression?';
const getOperator = () => {
  const part = getRandomNumber(1, 3);
  switch (part) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return 'error';
  }
};
const calculateNumbers = (numberOne, numberTwo, operator) => {
  switch (operator) {
    case '+':
      return `${(numberOne + numberTwo)}`;
    case '-':
      return `${(numberOne - numberTwo)}`;
    case '*':
      return `${(numberOne * numberTwo)}`;
    default:
      return 'error';
  }
};

const getQuestionAndAnswer = () => {
  const oneNumber = getRandomNumber(1, 99);
  const twoNumber = getRandomNumber(1, 99);
  const operator = getOperator();
  const question = `${oneNumber} ${operator} ${twoNumber}`;
  const trueAnswer = calculateNumbers(oneNumber, twoNumber, operator);
  return cons(question, trueAnswer);
};

export default () => {
  gameProcess(textGameDescription, getQuestionAndAnswer);
};
