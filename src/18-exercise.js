/**
 * Extra Challenge
 *
 * Complete the function bellow to:
 *
 * Create a recursive function that calculates the Fibonacci Sequence.
 * The parameters of this fuction are restricted to be the number of steps wanted, the last calculated value and the previous one.
 * The function must return the value of of the sequence after N number of loops.
 *
 * Fibonnaci Sequence:
 * Initial state: 1, 1
 *
 * Sequence: 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610...
 *
 * Example:
 * Loops requested: 6
 * Result: 21
 *
 * NOTE:
 * Your browser might get frozen if you don’t stop the recursive function.
 * It’s the same as an infinite loop.
 */

// Complete the code to the function
function exercise18(loops) {
    return fibonacci(loops, 1, 1);
}

function fibonacci(loops, valueA, valueB) {
    // Write the solution bellow this line
    loops--;
    if (loops > 0) {
        return fibonacci(loops, valueB, valueA + valueB);
    }
    return valueA + valueB;
}

module.exports = exercise18;
