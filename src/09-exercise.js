/**
 * Complete the function to use a 'for' loop to console.log
 * each of the arguments of the function.
 *
 * NOTE:
 * 'arguments' is a special property of JavaScript functions that
 * contains the parameters it received in an 'Array like' array.
 *
 * 'Array like' means that it has a 'length' property
 * and that you can access it’s elements by position
 * arguments[0] = 'hola', but you cannot use array
 * specific methods such as 'forEach' or 'map'.
 *
 * You can just use the 'arguments' as a variable that JavaScript
 * creates automatically inside a function, you don’t need to
 * declare it as a variable.
 *
 * @example
 * myFunction('alex', 'perez');
 *
 * function myFunction(firstname, lastname) {
 *   console.log(arguments[0]); => 'alex'
 *   console.log(arguments[1]); => 'perez'
 * }
 */
function exercise09() {
    // Write your code bellow this line
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

module.exports = exercise09;
