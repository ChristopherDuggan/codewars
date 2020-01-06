/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) == 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                      // and 4 has only one digit

 persistence(999) == 4 // because 9*9*9 = 729, 7*2*9 = 126,
                       // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) == 0 // because 4 is already a
 */

class Persist {
  public static int persistence(long n) {
    long num = n;
    int counter = 0;
//While the number of digits in the array is greater than one, create an array
//whith a number of elements equal to the number of digits and populate it with
//those digts. multiply all those numbers together and that is the new number.
//Increase the counter
    while ((int) (Math.log10(n) + 1) > 1) {
      int[] digits =
    }
  }
}
