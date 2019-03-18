import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain Games!');
export const acquaintance = () => {
  const actual = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${actual}!`);
  return actual;
};

export const gameProcess = () => {
  welcome();
  acquaintance();
};
