/**
 * Complete the function bellow to:
 *
 * Return the difference between the total amount
 * in 'income' and the total amount in 'outcome'
 */

// Complete the code to the function

function exercise14() {
    let income = [100, 30, 10];
    let outcome = [40, 60, 60, 30];
    let total = 0;

    let totalIncome = 0;
    let totalOutcome = 0;

    income.forEach((entry) => {
        totalIncome += entry;
    });

    outcome.forEach((expense) => {
        totalOutcome += expense;
    });

    total = totalIncome - totalOutcome;

    return total;
}

module.exports = exercise14;
