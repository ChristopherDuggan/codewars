/*
Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 21445 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/
import java.util.Arrays;
import java.util.Collections;

public class DescendingOrder {
  public static int sortDesc(final int num) {
    String numString = String.valueOf(num);

    String[] numArray = numString.split("");

    Arrays.sort(numArray, Collections.reverseOrder());

    String newNum = String.join("", numArray);

    return Integer.parseInt(newNum);
  }
}
