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
