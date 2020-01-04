//the total blocks walked has to be 10
//for each block in one direction, you must also travel back 1 block in the opposite direction

function isValidWalk(walk) {
  if (walk.length!== 10){
    return false
  }
  let nCount = 0
  let eCount = 0
  for (let i = 0; i < walk.length; i++){
    if (walk[i] === 'n'){
      nCount++
    }
    if (walk[i] === 's') {
      nCount--
    }
    if (walk[i] === 'e') {
      eCount++
    }
    if(walk[i] === 'w') {
      eCount--
    }
  }
  if(nCount !== 0 || eCount !== 0) {
    return false
  }
  return true
}
