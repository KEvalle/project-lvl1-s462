#!/usr/bin/env node

import { gameProcess } from '..';
import { getRandomNumber, cons } from '../utils';

const isEven = question => question % 2 === 0;
const getTrueAnswer = question => ((isEven(question)) ? 'yes' : 'no');
const getPair = () => {
  const question = getRandomNumber(1, 99);
  const trueAnswer = getTrueAnswer(question);
  return cons(`${question}`, trueAnswer);
};

const gameDescription = "Answer 'yes' if number even otherwise answer 'no'.";

gameProcess(gameDescription, getPair);
