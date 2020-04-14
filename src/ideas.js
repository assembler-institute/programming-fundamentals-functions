/**
 * receives arr of nums and returns the sum of impares numbers
 *
 * receives arr of positive and negative nums and returns the sum of negative numbers
 *
 *
 */

// It's a Pokemon battle!

// Your task is to calculate the damage that a particular move
// would do using the following formula

// (not the actual one from the game):

// damage = 50 * (attack / defense) * effectiveness

// Where:
// attack = your attack power
// defense = the opponent's defense
// effectiveness = the effectiveness of the attack based on the matchup
// (see explanation below)

// Effectiveness:

// Attacks can be super effective, neutral, or not very effective depending
// on the matchup. For example, water would be super effective against fire,
// but not very effective against grass.

// Super effective: 2x damage
// Neutral: 1x damage
// Not very effective: 0.5x damage

// To prevent this kata from being tedious, you'll only be dealing
// with four types: fire, water, grass, and electric.

// Here is the effectiveness of each matchup:

// fire > grass
// fire < water
// fire = electric

// water < grass
// water < electric
// grass = electric

// For this kata, any type against itself is not very effective.
// Also, assume that the relationships between different types
// are symmetric
// (
//  if A is super effective against B,
//  then B is not very effective against A
// )

// The function you must implement takes in:

// your type
// the opponent's type
// your attack power
// the opponent's defense

// 1 con un array solo

// 2 con la matriz
// Devuelve la cantidad de 1 en la matriz

var demo = [
    [0, 1, 0, 1],
    [0, 0, 0, 1],
    [1, 0, 0, 0],
];

function calculate(input) {
    var out = 0;

    for (let x = 0; x < input.length; x++) {
        for (let y = 0; y < input[x].length; y++) {
            if (input[x][y]) {
                out++;
            }
        }
    }

    return out;
}

console.log(calculate(demo));

let ingresos = [100, 30, 10];
let gastos = [40, 60, 60, 30];

function calculate(ingresos, gastos) {
    var out = 0;

    // iterate

    return out;
}

console.log(calculate(ingresos, gastos)); // -30
