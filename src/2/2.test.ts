import { checkPassword } from './2';

describe('Day 2', () => {
  it('should work for a single password', () => {
    const input = '17-19 p: pwpzpfbrcpppjppbmppp'; // 9 p's
    const input2 = '7-9 p: pwpzpfbrcpppjppbmppp'; // 9 p's
    expect(checkPassword(input)).toBe(false);
    expect(checkPassword(input2)).toBe(true);
  });
});
