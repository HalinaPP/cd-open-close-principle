const IncomeMultiplier = require('./IncomeMultiplier');

const DEFAULT_LOAN = 100;
const LOAN_BONUS_AGE = 21;
const LOAN_BONUS = 150;

module.exports = class StudentLoan {
  constructor(initialLoan = DEFAULT_LOAN) {
    this.initialLoan = initialLoan;
  }

  getLoan(age, income) {
    let loan = this.initialLoan;
    if (age >= LOAN_BONUS_AGE) {
      loan += LOAN_BONUS;
    }

    return IncomeMultiplier.multiply(loan, income);
  }
};
