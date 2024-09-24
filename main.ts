import { reverseString, countCharacters } from './stringUtils';


const sentence = "Learning Node.js is important because it allows you to build scalable server-side applications.";


const reversedSentence = reverseString(sentence);


const characterCount = countCharacters(sentence);


console.log("Original Sentence:", sentence);
console.log("Reversed Sentence:", reversedSentence);
console.log("Character Count:", characterCount);