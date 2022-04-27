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
    this.validateLoan(loanType);
    
    return this.loanMap.get(loanType).getLoan(age, income);
  }

  validateLoan(loanType){
    if (this.isLoanHasNotType(loanType)) {
      throw new Error("This loan type doesn't exist");
    }
  }

  isLoanHasNotType(loanType){
    return !this._loanMap.has(loanType);
  }
};
