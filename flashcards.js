// Require associated JS files
let basic = require('./basic_card.js');
let cloze = require('./cloze_card.js');


// Create new card objects for a basic card
let firstPresident = new basic.BasicCard(
	'Who was the first president of the United States?', 'George Washington');

console.log('Front: ' + firstPresident.front + '\n');
console.log('Back: ' + firstPresident.back + '\n');


// Create new card objects for a clozed card
let firstPresidentCloze = new cloze.ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

console.log('Cloze: ' + firstPresidentCloze.cloze + '\n'); 
console.log('Partial: ', firstPresidentCloze.partial + '\n'); 
console.log('Full Text: ', firstPresidentCloze.full + '\n'); 


// Broken cloze card object, throws an error
let brokenCloze = new cloze.ClozeCard("This doesn't work", "oops");


// Example of how to call constructors without using NEW keyword
let firstPresidentNew = basic.BasicCard(
	'Who was the first president of the United States?', 'George Washington');

console.log(firstPresidentNew);