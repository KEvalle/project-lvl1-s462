import { gameProcess } from '..';
import { getRandomNumber, cons } from '../utils';

const gameDescription = 'What is the result of the expression?';
const calculateNumbers = (numberOne, numberTwo, operator) => {
  switch (operator) {
    case '+':
      return (numberOne + numberTwo);
    case '-':
      return (numberOne - numberTwo);
    case '*':
      return (numberOne * numberTwo);
    default:
      return 'error';
  }
};

const genGameData = () => {
  const operators = ['+', '-', '*'];
  const oneNumber = getRandomNumber(1, 99);
  const twoNumber = getRandomNumber(1, 99);
  const operator = operators[getRandomNumber(0, 2)];
  const question = `${oneNumber} ${operator} ${twoNumber}`;
  const trueAnswer = calculateNumbers(oneNumber, twoNumber, operator);
  return cons(question, trueAnswer);
};

export default () => {
  gameProcess(gameDescription, genGameData);
};
