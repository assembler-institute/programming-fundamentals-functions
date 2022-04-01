/**
 * Complete the function bellow to:
 *
 * 1. Receive a parameter named 'callback', which is a function
 * 2. Execute a 'forEach' loop on the nums array
 * 3. Call the 'callback' function parameter inside the 'forEach' loop,
 *    and pass the current item in the nums array as a parameter.
 *
 * NOTE:
 * You will need to add the 'callback' parameter to the exercise08() function
 */
function exercise08(callback) {
    let nums = [1, 2, 3, 4, 5];

    // Write your code bellow this line
    nums.forEach(callback);
}

module.exports = exercise08;
