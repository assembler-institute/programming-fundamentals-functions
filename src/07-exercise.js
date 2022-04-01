/**
 * Complete the function bellow to:
 *
 * 1. Receive 2 number parameters named 'a' and 'b'
 * 2. Return 'error' when the 'a' and 'b' parameters are both undefined
 * 3. Return 'missing b parameter' when 'b' is undefined but not 'a'
 * 4. Return 'a' + 'b' when 'a' and 'b' are both not undefined
 */

// Complete the code to the function
function exercise07(a, b) {
    if (a === undefined && b === undefined) {
        return 'error';
    } else if (a !== undefined && b === undefined) {
        return 'missing b parameter';
    } else if (a !== undefined && b !== undefined) {
        return a + b;
    }
}

module.exports = exercise07;
