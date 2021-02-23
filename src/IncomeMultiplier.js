module.exports = class IncomeMultiplier {
    static multiply(loan, income) {
        return loan * this.getIncomeMultiplier(income);
    }

    static getIncomeMultiplier(income) {
        return income <= 1000 ? 1 : 2;
    }
}
