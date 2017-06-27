exports.ClozeCard = function(text, cloze) {

	let textToLower = text.toLowerCase();
	let clozeToLower = cloze.toLowerCase();

	if (!textToLower.includes(clozeToLower)) {
		console.log('Error: cloze-deletion ' + cloze + ' not found');
		return;
	} 

	this.full = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');

}

