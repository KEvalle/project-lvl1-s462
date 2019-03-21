import readlineSync from 'readline-sync';
import { car, cdr } from './utils';

const countQuestion = 3;

const playGame = (getQuestionAndAnswer, name) => {
  for (let counter = 1; counter <= countQuestion; counter += 1) {
    const QuestionAndAnswer = getQuestionAndAnswer();
    const answer = readlineSync.question(`Question:${car(QuestionAndAnswer)}\nYou answer:`);
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
  console.log('Welcome to the Brain Games!');
  console.log(textDescription);
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  playGame(getQuestionAndAnswer, name);
};

export default gameProcess;
