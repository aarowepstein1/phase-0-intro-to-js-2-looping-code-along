/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

wrapGifts(gifts);
*/
function writeCards(names, event) {
    const message = [];
    for (let i = 0; i < names.length; i++) {
       message[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
       
    }
    return message;
}

function countDown(number) {
    let counter = number;
    while (counter >= 0) {
        console.log(counter--);
    }
}