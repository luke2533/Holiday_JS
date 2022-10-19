let arrOne = ["Paris", "Brussels", "Amsterdam", "Berlin", "Copenhagen", "Prague", "Vienna", "Budapest", "Rome", "Zurich", "Madrid", "Lisbon"]; // 12
let arrTwo = ["2 Nights","3 Nights", "4 Nights", "5 Nights","6 Nights", "1 Week", "2 Weeks"]; // 7
let arrThree = ["Plane", "Ferry", "Cruise", "Train"]; // 4

msgOne = Math.floor(Math.random() * 13);
msgTwo = Math.floor(Math.random() * 7);
msgThree = Math.floor(Math.random() * 4);

console.log("Find your holiday today!");
console.log("Your destination will be " + arrOne[msgOne] + " for " + arrTwo[msgTwo] + " traveling by " + arrThree[msgThree] + "!");