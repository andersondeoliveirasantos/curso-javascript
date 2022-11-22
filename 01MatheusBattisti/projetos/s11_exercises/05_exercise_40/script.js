class Account {
  constructor(currentAccount, savingsAccount, fees) { // (Conta Corrente, Conta Poupança, Juros)
    this.currentAccount = currentAccount
    this.savingsAccount = savingsAccount
    this.fees = fees
  }
  deposit(value) {
    this.currentAccount += value
  }

  withdraw(value) {
    this.currentAccount -= value
  }

  savingsAccountTransfer(value) { // Tranferência Conta Poupança
    this.currentAccount -= value
    this.savingsAccount += value
  }

  currentAccountTransfer(value) { // Transferência Conta Corrente
    this.savingsAccount += value
    this.currentAccount -= value
  }

  birthdayInterest() { // Saque aniversário
    let fees = (this.savingsAccount * this.fees) / 100
    this.savingsAccount += fees
  }
}

  class SpecialAccount extends Account { // Conta Especial
    constructor(currentAccount, savingsAccount, fees) {
      super(currentAccount, savingsAccount, fees * 2)  

  }
} 

let account = new Account(1000, 5000, 1)

console.log(account)

account.withdraw(500)

console.log(account)

account.deposit(5000)

console.log(account)

account.savingsAccountTransfer(3000)

console.log(account)

account.birthdayInterest()

console.log(account)

let account2 = new SpecialAccount(10000, 50000, 1)

console.log(account2)

account2.withdraw(5000)

console.log(account2)

account2.birthdayInterest()

console.log(account2)
