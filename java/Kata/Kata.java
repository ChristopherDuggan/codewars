// Convert number to reversed array of digits
// Given a random number:
// You have to return the digits of this number within an array in reversed
// order.
// Example:
// 348597 => [7,9,5,8,4,3]

import java.util.Arrays;

public class Kata {
  public static int[] digitize(long n) {
    String nString = String.valueOf(n);
    int[] result = new int[nString.length()];

   for(int i = 0; i < nString.length(); i++){

      result[i] = Character.getNumericValue(nString.charAt(i));
   }

   for(int i = 0; i < result.length/2; i++){
     int temp = result[i];
     result[i] = result[result.length - i - 1];
     result[result.length - i - 1 ] = temp;
   }

    return result;
  }
  public static void main(String[] args) {
    digitize(12345);
  }
}
