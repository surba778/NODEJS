"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringUtils_1 = require("./stringUtils");
var sentence = "Learning Node.js is important because it allows you to build scalable server-side applications.";
var reversedSentence = (0, stringUtils_1.reverseString)(sentence);
var characterCount = (0, stringUtils_1.countCharacters)(sentence);
console.log("Original Sentence:", sentence);
console.log("Reversed Sentence:", reversedSentence);
console.log("Character Count:", characterCount);
