/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->  3
*/

const highestRank = (arr) => {
  let highestFrequency = arr[0];
  let frequency = 1;

  for(let i = 0; i < arr.length; i++) {

    let newFrequency = 1;
    for(let j = i + 1; j < arr.length; j++) {

      if(arr[i] == arr[j]) newFrequency++;
    }

    if ((newFrequency > frequency) || (newFrequency == frequency && arr[i] > highestFrequency)) {
      highestFrequency = arr[i];
      frequency = newFrequency;
    }
  }

  return highestFrequency;
}
