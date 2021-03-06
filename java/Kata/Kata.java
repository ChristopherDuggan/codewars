// Convert number to reversed array of digits
// Given a random number:
// You have to return the digits of this number within an array in reversed
// order.
// Example:
// 348597 => [7,9,5,8,4,3]


public class Kata {
  public static int[] digitize(long n) {
    return new StringBuilder().append(n)
      .reverse()
      .chars()
      .map(Character::getNumericValue)
      .toArray();
  }
  public static void main(String[] args) {
    digitize(012345);
  }
}
