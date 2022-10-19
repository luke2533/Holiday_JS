let msgOne = ["Paris", "Brussels", "Amsterdam", "Berlin", "Copenhagen", "Prague", "Vienna", "Budapest", "Rome", "Zurich", "Madrid", "Lisbon"];
let msgTwo = ["2 Nights","3 Nights", "4 Nights", "5 Nights","6 Nights", "1 Week", "2 Weeks"];
let msgThree = ["Plane", "Ferry", "Cruise", "Train"];

function randomMsg(arr) {
    let message = "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {
                console.log(arr[i][j][k]);
            }
        }
    }
    return message;
}

randomMsg(msgOne, msgTwo. msgThree);