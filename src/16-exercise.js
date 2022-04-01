/**
 * Let’s play Rock, Paper, Scissors!
 *
 * Rules:
 *
 * 1. Rock wins against scissors.
 * 2. Scissors wins against paper.
 * 3. Paper wins against rock.
 * 4. If both user choose the same, play again.
 *
 * If the user wins:
 * return the variable 'userWins'
 *
 * If the computer wins:
 * return the variable 'computerWins'
 *
 * If you both have the same option:
 * return the variable 'sameChoice'
 *
 * The `rockPaperScissors()` function receives 2 parameters,
 * `userChoice` and `computerChoice`,
 * that you can provide to try the function.
 */
function rockPaperScissors(userChoice, computerChoice) {
    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors';
    let userWins = 'User wins!';
    let computerWins = 'Computer wins!';
    let sameChoice = 'Play again!';

    // Same choice
    if (userChoice === rock && computerChoice === rock) {
        return sameChoice;
    } else if (userChoice === paper && computerChoice === paper) {
        return sameChoice;
    } else if (userChoice === scissors && computerChoice === scissors) {
        return sameChoice;
    }

    // 1. rock wins against scissors
    // 2. scissors win against paper
    // 3. paper wins against rock
    if (userChoice === rock && computerChoice === scissors) {
        return userWins;
    } else if (userChoice === scissors && computerChoice === rock) {
        return computerWins;
    } else if (userChoice === scissors && computerChoice === paper) {
        return userWins;
    } else if (userChoice === paper && computerChoice === scissors) {
        return computerWins;
    } else if (userChoice === paper && computerChoice === rock) {
        return userWins;
    } else if (userChoice === rock && computerChoice === paper) {
        return computerWins;
    }
}

module.exports = rockPaperScissors;
