// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 14, b: 7, action: Action.Add })).toBe(21);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 14, b: 7, action: Action.Subtract })).toBe(7);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 14, b: 7, action: Action.Multiply })).toBe(98);
  });

  test('should divide two numbers', () => {
    // Write your test here
    expect(
      simpleCalculator({ a: 14, b: 7, action: Action.Divide }),
    ).toBeCloseTo(2);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 14, b: 7, action: Action.Exponentiate })).toBe(
      105413504,
    );
  });

  test('should return null for invalid action', () => {
    // Write your test here
    expect(simpleCalculator({ a: 14, b: 7, action: ' ' })).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    expect(simpleCalculator({ a: 14, b: ' ', action: '^' })).toBeNull();
    expect(simpleCalculator({ a: ' ', b: 7, action: '^' })).toBeNull();
  });
});
