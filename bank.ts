interface Account {
  id: number;
  owner: string;
  balance: number;
}

interface Transaction {
  id: number;
  amount: number;
  type: "deposit" | "withdrawal";
  accountId: number;
}

class BankingSystem {
  private accounts: Account[] = [];
  private transactions: Transaction[] = [];

  createAccount(owner: string, initialBalance: number): Account {
    const account: Account = {
      id: this.accounts.length + 1,
      owner,
      balance: initialBalance,
    };
    this.accounts.push(account);
    return account;
  }

  getAccount(accountId: number): Account | undefined {
    return this.accounts.find((account) => account.id === accountId);
  }

  deposit(accountId: number, amount: number): void {
    const account = this.getAccount(accountId);
    if (account) {
      account.balance += amount;
      this.transactions.push({
        id: this.transactions.length + 1,
        amount,
        type: "deposit",
        accountId,
      });
    }
  }

  withdraw(accountId: number, amount: number): void {
    const account = this.getAccount(accountId);
    if (account && account.balance >= amount) {
      account.balance -= amount;
      this.transactions.push({
        id: this.transactions.length + 1,
        amount,
        type: "withdrawal",
        accountId,
      });
    }
  }

  getTransactions(accountId: number): Transaction[] {
    return this.transactions.filter(
      (transaction) => transaction.accountId === accountId
    );
  }
}

const bankingSystem = new BankingSystem();

// Example
const account1 = bankingSystem.createAccount("John Doe", 1000);
bankingSystem.deposit(account1.id, 500);
bankingSystem.withdraw(account1.id, 200);

console.log(bankingSystem.getTransactions(account1.id));
