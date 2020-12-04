import { checkPassword } from './2';

describe('Day 2', () => {
  it('should work for a single password', () => {
    const input = '17-19 p: pwpzpfbrcpppjppbmppp'; // 11 p's
    const input2 = '10-11 p: pwpzpfbrcpppjppbmppp'; // 11 p's
    expect(checkPassword(input)).toBe(false);
    expect(checkPassword(input2)).toBe(true);
  });
});
