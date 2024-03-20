# L - Liskov Substitution Principle (LSP)

> Subclasses should extend the behavior of the parent class but not change the base code by something different. It's possible to change
> If you follow this principle you will be able to replace a parent class by any of its subclasses without breaking the client code.

### Bad Approach

- The `FixedDepositAccount` subclass has not the same behavior (withdraw method) that expected from the superclass `BankAccount`.
- If you replace a `BankAccount` object, in this example, with a `FixedDepositAccount` object, the `processAccount` function will break due to the overridden withdraw method.

```typescript
class BankAccount {
  balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    this.balance -= amount;
  }
}

class FixedDepositAccount extends BankAccount {
  withdraw(amount: number) {
    throw new Error("Cannot withdraw from a Fixed Deposit account!");
  }
}

function processAccount(account: BankAccount, amount: number) {
  account.withdraw(amount); // This will throw an error if account is a FixedDepositAccount
  // ... some other operations
}
```

### Good Approach

One way to solve this problem is to not make `FixedDepositAccount` a subclass of `BankAccount`. Instead, create different interfaces for accounts that can withdraw and those that cannot.

In this setup, the `processAccount` function expects an object of type **Withdrawable**. We're using interfaces to ensure that only accounts that implement the withdraw method can be passed into the function, maintaining the **Liskov Substitution Principle**.

```typescript
interface Depositable {
  deposit(amount: number): void;
}

interface Withdrawable {
  withdraw(amount: number): void;
}

class BankAccount implements Depositable, Withdrawable {
  balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    this.balance -= amount;
  }
}

class FixedDepositAccount implements Depositable {
  balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }
}

function processAccount(account: Withdrawable, amount: number) {
  account.withdraw(amount); // Here we will not get any errors because account param implements Withdrawable interface and will have a withdraw method.
  // ... some other operations
}
```

### Notes

Fixed deposit accounts, also known as term deposits or time deposits in some regions, are special types of bank accounts designed to hold a certain amount of money for a fixed period of time. They don't typically allow withdrawals before the end of this period
