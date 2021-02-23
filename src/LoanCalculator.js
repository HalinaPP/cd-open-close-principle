const IncomeMultiplier = require('./IncomeMultiplier');

module.exports = class LoanCalculator {
    getStudentLoan(age, income) {
        let loan = 100;

        if (age >= 21) {
            loan += 150;
        }

        return IncomeMultiplier.multiply(loan, income);
    }

    getCarLoan(age, income) {
        let loan = 2000;

        if (age > 50) {
            loan += 1500;
        } else if (age > 30) {
            loan += 1000;
        }

        return IncomeMultiplier.multiply(loan, income);
    }

    getHouseLoan(age, income) {
        let loan = 100000;

        if (age > 30 && income > loan / 2) {
            loan *= 2;
        }

        return IncomeMultiplier.multiply(loan, income);
    }
}
