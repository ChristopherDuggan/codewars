// Convert number to reversed array of digits
// Given a random number:
// You have to return the digits of this number within an array in reversed
// order.
// Example:
// 348597 => [7,9,5,8,4,3]

import java.util.*;

public class Kata {
  public static int[] digitize(long n) {
    ArrayList<Integer> list = new ArrayList<Integer>();

    while(n > 0) {
      list.add((int) n % 10);
      n = n /10;
    }

    int[] result = list.stream().mapToInt(Integer::intValue).toArray();
    return result;
  }
  public static void main(String[] args) {
    digitize(12345);
  }
}
