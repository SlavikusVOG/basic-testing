// Uncomment the code below and write your tests
import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    // Write your test here
    const callback = jest.fn();
    const timer = 1000;
    doStuffByTimeout(callback, timer);
    expect(callback).not.toHaveBeenCalled();
  });

  test('should call callback only after timeout', () => {
    // Write your test here
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    // Write your test here
    // doStuffByInterval();
  });

  test('should call callback multiple times after multiple intervals', () => {
    // Write your test here
    // doStuffByInterval();
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    // Write your test here
    // readFileAsynchronously();
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
    // readFileAsynchronously();
  });

  test('should return file content if file exists', async () => {
    // Write your test here
    // readFileAsynchronously();
  });
});
