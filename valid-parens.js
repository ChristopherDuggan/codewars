// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
//Constraints:
//0 <= input.length <= 100


function validParentheses(parens){
  let openCount = 0
  let closedCount = 0
  for ( let i = 0; i < parens.length; i++ ) {
    if ( parens[i] === '(' ) {
      openCount++
    }
    if ( parens[i] === ')' ) {
      closedCount++
    }
    if ( closedCount > openCount ) {
      return false
    }
  }
  return (openCount === closedCount)
}
