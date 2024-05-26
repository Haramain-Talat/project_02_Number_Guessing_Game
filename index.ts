#! /usr/bin/env node

import inquirer from "inquirer";

let roundNumber: number = Math.floor(( Math.random() * 5) + 1);

let userInput = await inquirer.prompt({
    type: 'number',
    name: 'guessedNumber',
    message: 'Guess a number between 1 -5',

});

if (userInput.guessedNumber === roundNumber) {
    console.log("Congratulations! you guessed correctly!");
} else {
    console.log(`Sorry! try next time. Correct answer is: ${roundNumber}`);
};