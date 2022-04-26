const IncomeMultiplier = require("./IncomeMultiplier");

module.exports = class CarLoan {
  constructor(initialLoan = 2000) {
    this.initialLoan = initialLoan;
  }

  getLoan(age, income) {
    let loan = this.initialLoan;

    if (age > 50) {
      loan += 1500;
    } else if (age > 30) {
      loan += 1000;
    }

    return IncomeMultiplier.multiply(loan, income);
  }
};
