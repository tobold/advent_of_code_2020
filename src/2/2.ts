import { input } from './input';

export const checkPassword = (input: string): boolean => {
  const [numberLimits, letterInput, password] = input.split(' ');
  const [minimum, maximum] = numberLimits
    .split('-')
    .map((limit) => Number(limit));
  const letter = letterInput.replace(':', '');
  const occurrencesOfLetter = password.replace(new RegExp(letter, 'g'), '')
    .length;
  return (
    minimum <= occurrencesOfLetter && occurrencesOfLetter <= maximum
  );
};

const partOne = (input: string[]) => {
  return input.filter(checkPassword).length;
};

console.log(partOne(input));
