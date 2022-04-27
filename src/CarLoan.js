const IncomeMultiplier = require("./IncomeMultiplier");

const DEFAULT_LOAN = 2000;

const ADULT_AGE = 30;
const ADULT_LOAN_BONUS = 1000;

const SENIOR_AGE = 50;
const SENIOR_LOAN_BONUS = 1500;

module.exports = class CarLoan {
  constructor(initialLoan = DEFAULT_LOAN) {
    this.initialLoan = initialLoan;
  }

  getLoan(age, income) {
    let loan = this.initialLoan;

    if (age > SENIOR_AGE) {
      loan += SENIOR_LOAN_BONUS;
    } else if (age > ADULT_AGE) {
      loan += ADULT_LOAN_BONUS;
    }

    return IncomeMultiplier.multiply(loan, income);
  }
};
