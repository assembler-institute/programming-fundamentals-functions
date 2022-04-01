/**
 * Complete the function bellow to:
 *
 * Return the sum of the negative numbers in the 'nums' array
 */

// Complete the code to the function

function exercise15() {
    let nums = [20, -10, 30, -5, -15, 50, -10];

    let total = 0;

    nums.forEach((num) => {
        if (num < 0) {
            total += num;
        }
    });

    return total;
}

module.exports = exercise15;
