exports.sanitize = function (word) {
	return word.toLowerCase().replace(/-/g, ' ');
}

exports.tokenize = function(sentence){
	return sentence.split(' ');
}