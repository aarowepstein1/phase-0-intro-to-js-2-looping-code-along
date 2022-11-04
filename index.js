/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old, Happy birthday to me!`);
    
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
    }
    return gifts;
}

wrapGifts(gifts);
*/
const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";
const thankYous = [];
function writeCards(names, event) {
    for (let x = 0; x < names.length; x++) {
        
        thankYous.push(`Thank you, ${names[x]}, for the wonderful ${event} gift!`);   
    }
    
    return thankYous;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}