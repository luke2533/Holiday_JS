let msgOne = ["Paris", "Brussels", "Amsterdam", "Berlin", "Copenhagen", "Prague", "Vienna", "Budapest", "Rome", "Zurich", "Madrid", "Lisbon"];
let msgTwo = ["2 Nights","3 Nights", "4 Nights", "5 Nights","6 Nights", "1 Week", "2 Weeks"];
let msgThree = ["Plane", "Ferry", "Cruise", "Train"];

function randomMsg(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[j].length; j++) {
            for (let k = 0; k < arr[k].length; k++) {
            }
        }
    }
}

console.log("Find your holiday today!");
randomMsg(msgOne, msgTwo, msgThree);
let message = "Your destination " + randomMsg(msgOne) + " for " + randomMsg(msgTwo) + " traveling by " + randomMsg(msgThree);
console.log(message);
