"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
// Part 1: Define the sentence and reverse it
var sentence = "Learning Node.js is important!";
var reversedSentence = sentence.split('').reverse().join('');
// Part 2: Define the file path for the reversed.txt file
var filePath = path.join(__dirname, 'reversed.txt');
// Part 3: Write the reversed sentence to the reversed.txt file
fs.writeFileSync(filePath, reversedSentence);
// Part 4: Log the full path of the reversed.txt file
console.log("The reversed sentence has been written to: ".concat(filePath));
