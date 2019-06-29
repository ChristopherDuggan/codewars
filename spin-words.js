/* Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test" */

function spinWords(string){
  let wordArray = string.split(' ')
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length >= 5) {
      wordArray[i] = wordArray[i].split('').reverse().join('')
    }
  }
  return wordArray.join(' ')
}

console.log(spinWords('this is a thing that spins around all words that are longer than five characters long'))
