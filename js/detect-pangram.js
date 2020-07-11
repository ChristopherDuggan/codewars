function isPangram(string) {
	if (string.length < 26) return false;
	let alphabet = 
	{a: false,
	b: false,
	c: false,
	d: false,
	e: false,
	f: false,
	g: false,
	h: false,
	i: false,
	j: false,
	k: false,
	l: false,
	m: false,
	n: false,
	o: false,
	p: false,
	q: false,
	r: false,
	s: false,
	t: false,
	u: false,
	v: false,
	w: false,
	x: false,
	y: false,
	z: false}

	string = string.toLowerCase()
	
	for (let i = 0; i < string.length; i++) {
		if (alphabet[string.charAt(i)] == false) alphabet[string.charAt(i)] = true;	
	}
	for (let ch in alphabet) {
		if (alphabet[ch] == false) return false
	}
return true
}

console.log(isPangram("The quick brown fox jumps er the lazy dog."))