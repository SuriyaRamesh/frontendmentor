// 1. Basic Method (Reverse & Compare)

const text = 'madam';

function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return reversed === str;
}

console.log("is ", text ," Palindrom : ", isPalindrome(text));