function DNAStrand(dna){
  let output = ''
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === 'A') {
      output += 'T'
    }
    if (dna[i] === 'T') {
      output += 'A'
    }
    if (dna[i] === 'G') {
      output += 'C'
    }
    if (dna[i] === 'C') {
      output += 'G'
    }
  }
  return output
}

