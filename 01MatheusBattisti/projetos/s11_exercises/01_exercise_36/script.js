class Account {
  constructor(balance) {
    this.balance = balance
  }

  deposit(value) {
    this.balance += value
  }

  withdarw(value) {
    this.balance -= value
  }  
}

let account = new Account(1000)

account.deposit(1000)

console.log(account.balance)

account.withdarw(500)

console.log(account.balance)