import readlineSync from 'readline-sync';
import { car, cdr } from './utils';

const countQuestion = 3;

export const gameProcess = (textDescription, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(textDescription);
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);

  for (let i = 1; i <= countQuestion; i += 1) {
    const QuestionAndAnswer = getQuestionAndAnswer();
    console.log(`Question:${car(QuestionAndAnswer)}`);
    const answer = readlineSync.question('You answer:');
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

export default gameProcess;
