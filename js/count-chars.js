/* The main idea is to count all the occuring characters (UTF-8) in string. If
 * you have a string like this "aba" then the result should be "{ 'a': 2, 'b':
 * 1 }"
 *
 * What if the string is empty? Then the result should be an empty objet literal
 * "{ }"
 */

const count = (string) => {
  let charList = {};

  for (let i = 0; i < string.length; i++) {
    if (!charList[string[i]]) charList[string[i]] = 0;
    charList[string[i]] += 1;
  }

  return charList;
}

console.log(count("aba"));
console.log(count(""));
console.log(count("principle"));
