/**
 * Complete the function bellow so that:
 *
 * 1. It receives an array of numbers as a parameter
 * 2. Multiplies each item in the array by 2
 * 3. Return the array.
 *
 * NOTE: You will have to add the parameters to the function
 */

// Complete the code to the function
function exercise01(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    return arr;
}

module.exports = exercise01;
