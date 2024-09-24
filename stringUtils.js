"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseString = reverseString;
exports.countCharacters = countCharacters;
// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
// Function to count the characters in a string
function countCharacters(str) {
    return str.length;
}
