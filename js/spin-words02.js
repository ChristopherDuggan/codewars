// function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//
//  Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(s){
  s = s.split(' ');
  for (let i = 0; i < s.length; i++) {
    if (s[i].length > 4) {
      s[i] = s[i].split('').reverse().join('')
    }
  }
  return s.join(' ');
}

// this is more verbose than spin-words01 but is a bit faster and more readable

console.log(spinWords('My balogna has a first name. It\'s Oscar'));
