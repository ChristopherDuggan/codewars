function list(names) {
	let sentence = [];
	for (let i = 0 ; i < names.length; i++){
		if (i % 2 == 0)	sentence.push(names[i/2].name);
		if (i % 2 == 1) sentence.push(', ');	
	}
	sentence.splice(-1,1);
	sentence[sentence.length-2] = ' & ';
	return sentence.join('');
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))