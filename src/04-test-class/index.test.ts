// Uncomment the code below and write your tests
import {
  getBankAccount,
  BankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
} from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    // Write your test here
    const initialBalance = 10;
    const bankAccount = getBankAccount(initialBalance);
    expect(bankAccount).toBeInstanceOf(BankAccount);
    expect(bankAccount.getBalance()).toBe(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // Write your test here
    const initialBalance = 10;
    const bankAccount = getBankAccount(initialBalance);
    expect(() => {
      bankAccount.withdraw(20);
    }).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    // Write your test here
    const initialBalance = 10;
    const bankAccount = getBankAccount(initialBalance);
    const secondBankAccount = getBankAccount(initialBalance);
    expect(() => {
      bankAccount.transfer(20, secondBankAccount);
    }).toThrow();
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here
    const initialBalance = 10;
    const bankAccount = getBankAccount(initialBalance);
    expect(() => {
      bankAccount.transfer(5, bankAccount);
    }).toThrow();
  });

  test('should deposit money', () => {
    // Write your test here
    const initialBalance = 10;
    const bankAccount = getBankAccount(initialBalance);
    expect(bankAccount.deposit(5).getBalance()).toBe(15);
  });

  test('should withdraw money', () => {
    // Write your test here
    const initialBalance = 10;
    const bankAccount = getBankAccount(initialBalance);
    expect(bankAccount.withdraw(5).getBalance()).toBe(5);
  });

  test('should transfer money', () => {
    // Write your test here
    const initialBalance = 10;
    const bankAccount1 = getBankAccount(initialBalance);
    const bankAccount2 = getBankAccount(initialBalance);
    bankAccount1.transfer(5, bankAccount2);
    expect(bankAccount1.getBalance()).toBe(5);
    expect(bankAccount2.getBalance()).toBe(15);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
    const initialBalance = 10;
    const bankAccount = getBankAccount(initialBalance);
    const balance = await bankAccount.fetchBalance();
    expect(typeof balance).toBe('number');
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
    const initialBalance = 10;
    const bankAccount = getBankAccount(initialBalance);
    await expect(bankAccount.synchronizeBalance()).resolves.not.toThrow();
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
    const initialBalance = 10;
    const bankAccount = getBankAccount(initialBalance);
    await expect(bankAccount.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
  });
});
