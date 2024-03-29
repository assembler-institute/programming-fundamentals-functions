/**
 * Complete the function to use a 'for' loop to store
 * in the 'args' array each of the arguments of the function.
 *
 * You can use the `.push()` method of arrays.
 *
 * NOTE: 'arguments' is a special property of JavaScript functions that
 * contains the parameters it receives in an 'array like' array.
 *
 * 'Array like' means that it has a 'length' property
 * and that you can access its elements by position, like
 * arguments[0] = 'hi', but you cannot use array
 * specific methods such as 'forEach' or 'map'.
 *
 * You can just use the 'arguments' as a variable that JavaScript
 * creates automatically inside a function, you don’t need to
 * declare it as a variable.
 * 
 * ADDITTIONAL NOTE: 'arguments' is not, despite everything,
 * a reserved word in JavaScript. You should try not to use it
 * as a variable of your project, as you risk overwriting
 * existing functionality in JavaScript.
 *
 * @example
 * myFunction('alex', 'perez');
 *
 * function myFunction(firstname, lastname) {
 *   console.log(arguments[0]); // 'alex'
 *   console.log(arguments[1]); // 'perez'
 * }
 */

function exercise09() {
    let args = [];
    // Write your code bellow this line

    
    // Don’t change the code bellow this line
    return args;
}

module.exports = exercise09;
