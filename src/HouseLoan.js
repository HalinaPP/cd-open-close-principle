const IncomeMultiplier = require('./IncomeMultiplier');

module.exports = class StudentLoan {
  constructor(initialLoan = 100000) {
    this.initialLoan = initialLoan;
  }

  getLoan(age, income) {
    let loan = this.initialLoan;

    if (age > 30 && income > loan / 2) {
        loan *= 2;
    }

    return IncomeMultiplier.multiply(loan, income);
  }
};
