import readlineSync from 'readline-sync';
import { car, cdr } from './utils';

const showWelcome = () => console.log('Welcome to the Brain Games!');
const getDescription = text => console.log(text);
const getName = () => {
  const actual = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${actual}!`);
  return actual;
};
const getAnswerUser = question => readlineSync.question(`Question:${question}\nYou answer:`);
const countQuestion = 3;

const playGame = (getQuestionAndAnswer, name) => {
  for (let counter = 1; counter <= countQuestion; counter += 1) {
    const QuestionAndAnswer = getQuestionAndAnswer();
    const answer = getAnswerUser(car(QuestionAndAnswer));
    const trueAnswer = `${cdr(QuestionAndAnswer)}`;

    if (answer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export const gameProcess = (textDescription, getQuestionAndAnswer) => {
  showWelcome();
  getDescription(textDescription);
  const name = getName();
  playGame(getQuestionAndAnswer, name);
};

export default gameProcess;
