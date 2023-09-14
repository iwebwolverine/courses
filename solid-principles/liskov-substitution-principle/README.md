# L - Liskov Substitution Principle (LSP)

> Subclasses should extend the behavior of the parent class and not replace it by something different.
> If you follow this principle you will be able to replace a parent class by any of its subclasses without breaking the client code.

### Bad Approach

If you replace a `BankAccount` object, in this example, with a `FixedDepositAccount` object, the `processAccount` function will break due to the overridden withdraw method.

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
  account.withdraw(amount);
  // ... some other operations
}
```
