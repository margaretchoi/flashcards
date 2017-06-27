let basic = require('./basic_card.js');
let cloze = require('./cloze_card.js');

let firstPresident = new basic.BasicCard(
	'Who was the first president of the United States?', 'George Washington');

let firstPresidentCloze = new cloze.ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");


console.log('Front: ', firstPresident.front);
console.log('Back: ', firstPresident.back);

console.log('Cloze: ', firstPresidentCloze.cloze); 
console.log('Partial: ', firstPresidentCloze.partial); 
console.log('Full Text: ', firstPresidentCloze.full); 

let brokenCloze = new cloze.ClozeCard("This doesn't work", "oops");