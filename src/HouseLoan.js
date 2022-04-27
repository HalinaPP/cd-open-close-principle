const IncomeMultiplier = require('./IncomeMultiplier');

const DEFAULT_LOAN = 100000;
const DOUBLE_LOAN_BONUS_AGE = 30;

module.exports = class StudentLoan {
  constructor(initialLoan = DEFAULT_LOAN) {
    this.initialLoan = initialLoan;
  }

  getLoan(age, income) {
    let loan = this.initialLoan;

    if (age > DOUBLE_LOAN_BONUS_AGE && income > loan / 2) {
        loan *= 2;
    }

    return IncomeMultiplier.multiply(loan, income);
  }
};
