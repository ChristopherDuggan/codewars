/*
 Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution('camelCasing') // => should return 'camel Casing'
*/

function solution(string) {
  let stringArray = string.split('')
  for(let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].toLowerCase() != stringArray[i].toUpperCase()) {
      if (stringArray[i] === stringArray[i].toUpperCase())
      stringArray[i-1] += ' '
      console.log(stringArray[i])
    }
  }
  return stringArray.join('')
}

console.log(solution('thisIsATestString'))
