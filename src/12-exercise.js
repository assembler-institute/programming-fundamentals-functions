/**
 * Complete the function bellow to:
 *
 * Return the amount of 1s in the nums array
 */

// Complete the code to the function

function exercise12() {
    let nums = [1, 0, 1, 0, 1, 1, 0, 0];

    let total = 0;

    nums.forEach((n) => {
        if (n === 1) {
            total++;
        }
    });

    return total;
}

module.exports = exercise12;
