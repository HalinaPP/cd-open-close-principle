const IncomeMultiplier = require('./IncomeMultiplier');

module.exports = class StudentLoan {
  constructor(initialLoan = 100) {
    this.initialLoan = initialLoan;
  }

  getLoan(age, income) {
    let loan = this.initialLoan;
    if (age >= 21) {
      loan += 150;
    }

    return IncomeMultiplier.multiply(loan, income);
  }
};
