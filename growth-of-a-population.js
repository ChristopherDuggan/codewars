function nbYear(p0, percent, aug, p) {
  let i = 0
  while(p0 < p-1) {
    p0 = p0 * ((percent/100)+1) + aug
    i+= 1
  }
  return i
}
