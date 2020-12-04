import { checkPasswordPartOne, checkPasswordPartTwo } from './2';

describe('Day 2', () => {
  describe('part one', () => {
    it('should work for a single password', () => {
      const input = '17-19 p: pwpzpfbrcpppjppbmppp'; // 11 p's
      const input2 = '10-11 p: pwpzpfbrcpppjppbmppp'; // 11 p's
      expect(checkPasswordPartOne(input)).toBe(false);
      expect(checkPasswordPartOne(input2)).toBe(true);
    });
  });

  describe('part two', () => {
    it('should return false if both positions are the letter', () => {
      const input = '1-3 p: pop';
      expect(checkPasswordPartTwo(input)).toBe(false);
    });

    it('should return true if only the first position is the letter', () => {
      const input = '1-3 p: poo';
      expect(checkPasswordPartTwo(input)).toBe(true);
    });

    it('should return true if only the second position is the letter', () => {
      const input = '1-3 p: oop';
      expect(checkPasswordPartTwo(input)).toBe(true);
    });
  });
});
