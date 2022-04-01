/**
 * Complete the function bellow to:
 *
 * 1. Receive 2 number parameters named 'a' and 'b'
 * 2. Return 'a' * 'b' when 'a' and 'b' are both not undefined
 * 3. Return 'a' * 'a' when 'b' is undefined
 */

// Complete the code to the function
function exercise03(a, b) {
    if (a !== undefined && b !== undefined) {
        return a * b;
    } else if (a !== undefined && b === undefined) {
        return a * a;
    }
}

module.exports = exercise03;
