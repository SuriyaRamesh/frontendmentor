// Reverse the Given String
const str = "hello";

// 1. Basic Method (Beginner-friendly)

// -- a. Split → Reverse → Join
function reverseString1(str) {
    return str.split("").reverse().join("");
}
console.log("reverseString1 : ", reverseString1(str));

// How it works

// split('') converts the string into an array of characters
// → "hello" → ["h", "e", "l", "l", "o"]

// reverse() reverses the array
// → ["o", "l", "l", "e", "h"]

// join('') converts the array back into a string
// → "olleh"

// ---------------------------

// 2. Intermediate Method (Manual loop)

function reverseString2(str) {
    let reversed = '';
    for(i = str.length -1; i >=0; i--) {
        reversed += str[i];
        console.log("reversed : ", str[i]);
    }
    return reversed;
}

console.log('reversedString2: ', reverseString2(str));
