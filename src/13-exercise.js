/**
 * Complete the function bellow to:
 *
 * Return the amount of 1s in the nums multidimensional array
 */

// Complete the code to the function
function exercise13() {
    let nums = [
        [0, 1, 0, 1],
        [0, 1, 0, 1],
        [1, 0, 1, 0],
    ];

    let total = 0;

    for (let x = 0; x < nums.length; x++) {
        for (let y = 0; y < nums[x].length; y++) {
            if (nums[x][y]) {
                total++;
            }
        }
    }

    return total;
}

module.exports = exercise13;
