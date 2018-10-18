/**
 *@author Kaz Cogswell
 *@version 0.0.1
 *@todo Nothing
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let starRating , avgStar;
let total , currentTotal , counter;

function main() {
    setContinueResponse();
    while (continueResponse === 1) {
        setStarRating();
        setCounter();
        setTotal();
        setContinueResponse();
    }
    printCurrentTotal();

}
main();

    function setContinueResponse() {
        if (continueResponse === 1 || continueResponse === 0) {
            continueResponse = Number(PROMPT.question('Do you want to continue rating "Tommy Boy"? [1=Yes, 0=No]: '));
            while (continueResponse !== 0 && continueResponse !== 1) {
                console.log(continueResponse, ' is an incorrect answer. Please try again.');
                continueResponse = Number(PROMPT.question('Do you want to continue rating "Tommy Boy"? [1=Yes, 0=No]: '));
            }
        } else {
            continueResponse = 1;
        }
    }

    function setStarRating() {
        const MIN_RATE = 0, MAX_RATE = 5;
        while (!starRating || starRating >= MIN_RATE || starRating <= MAX_RATE) {
            starRating = Number(PROMPT.question('How would you rate "Tommy Boy" on a scale of 0-5?'));
            if (isNaN(parseInt(starRating)) || starRating < MIN_RATE || starRating > MAX_RATE) {
                console.log('This value was incorrect. Please try again');
                starRating = Number(PROMPT.question('How would you rate "Tommy Boy" on a scale of 0-5?'));
                console.log('This value was incorrect. Please try again');
                if (isNaN(parseInt(starRating)) || starRating < MIN_RATE || starRating > MAX_RATE)
                starRating = Number(PROMPT.question('How would you rate "Tommy Boy" on a scale of 0-5?'));
                break;
                console.log("Too many incorrect answers.")
            }
            break;
        }
    }
    function setCounter() {
        if (counter != null) {
            counter++;
        } else{
            counter = 1
        }
    }

    function setTotal() {
        if (total != null) {
            currentTotal = (total + starRating);
            total = currentTotal
        } else {
            total = starRating
        }

    }

    function printCurrentTotal() {
        console.log('Your average is ' , (currentTotal / counter) , '.');

    }