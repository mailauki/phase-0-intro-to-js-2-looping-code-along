// Code your solutions in this file
/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    /*debugger;
}
*/

/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        /*debugger;
    }

    return gifts;
}

wrapGifts(gifts);
*/

let newArray = [];
function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
        newArray.push (`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
        /*debugger;*/
    }
    return newArray;
}

function countDown() {
    let count = 10;
    while (count >= 0) {
        console.log(count--);
        /*debugger;*/
    }
    return count;
}
countDown(10);
