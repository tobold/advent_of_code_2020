import { input } from './input';

const partOne = (numbers: number[] = input): number => {
  let answer;
  numbers.forEach((number) => {
    numbers.forEach((newNumber) => {
      if (number === newNumber) return;
      if (number + newNumber) answer = number * newNumber;
    });
  });
  if (answer) {
    return answer;
  }
};

const partTwo = (numbers: number[] = input): number => {
  let answer;
  numbers.forEach((firstNumber) => {
    numbers.forEach((secondNumber) => {
      numbers.forEach((thirdNumber) => {
        if (
          firstNumber === secondNumber ||
          firstNumber === thirdNumber ||
          secondNumber === thirdNumber
        )
          return;
        if (firstNumber + secondNumber + thirdNumber === 2020)
          answer = firstNumber * secondNumber * thirdNumber;
      });
    });
  });
  if (answer) {
    return answer;
  }
};

console.log(partTwo(input));
