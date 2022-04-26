module.exports = class LoanCalculator {
  constructor() {
    this._loanMap = new Map();
  }

  get loanMap() {
    return this._loanMap;
  }

  set loanMap(value) {
    this._loanMap = value;
  }

  getLoan(loanType, age, income) {
    if (this._loanMap.has(loanType)) {
      return this.loanMap.get(loanType).getLoan(age, income);
    } else {
      throw new Error("This loan type doesn't exist");
    }
  }
};
