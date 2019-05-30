function GetSum( a,b )
{
  if(a === b) {
   return a
  } else {
    let values = [a, b].sort(function(a,b){
      return a-b
    })
    let sum = 0
    for(let i = values[0]; i <= values[1]; i++) {
      sum += i
    }
    return sum
  }
}

console.log(GetSum(-5, -1))
