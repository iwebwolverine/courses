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
