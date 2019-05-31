function nbYear(p0, percent, aug, p) {
  let i = 0
  while(p0 <= p) {
    console.log(p0)
    console.log(p)
    p0 = p0 * ((percent/100)+1) + aug
    i+= 1
  }
  return i
}

console.log(nbYear(1500, 5, 100, 5000))

