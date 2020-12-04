import { input } from './input';

export const checkPasswordPartOne = (input: string): boolean => {
  const [numberLimits, letterInput, password] = input.split(' ');
  const [minimum, maximum] = numberLimits
    .split('-')
    .map((limit) => Number(limit));
  const letter = letterInput.replace(':', '');
  const occurrencesOfLetter = password
    .split('')
    .filter((character) => character === letter).length;
  return minimum <= occurrencesOfLetter && occurrencesOfLetter <= maximum;
};

const partOne = (input: string[]) => {
  return input.filter(checkPasswordPartOne).length;
};

export const checkPasswordPartTwo = (input: string): boolean => {
  const [numberLimits, letterInput, password] = input.split(' ');
  const [firstPosition, secondPosition] = numberLimits
    .split('-')
    .map((limit) => Number(limit));
  const letter = letterInput.replace(':', '');

  const firstPositionCorrect = password[firstPosition - 1] === letter;
  const secondPositionCorrect = password[secondPosition - 1] === letter;

  if (firstPositionCorrect || secondPositionCorrect) {
    const bothAreCorrect = firstPositionCorrect && secondPositionCorrect;
    return !bothAreCorrect;
  }
};

const partTwo = (input: string[]) => {
  return input.filter(checkPasswordPartTwo).length;
};

console.log(partTwo(input));
