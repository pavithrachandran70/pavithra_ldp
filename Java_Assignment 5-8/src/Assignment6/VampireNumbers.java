package Assignment6;

public class VampireNumbers {
    public static void main(String[] args) {
        int count = 0;
        long num = 10; // Start from 10 because minimum vampire number is >= 2 digits

        while (count < 100) {
            if (isVampire(num)) {
                System.out.println(num);
                count++;
            }
            num++;
        }
    }

    public static boolean isVampire(long number) {
        String numStr = Long.toString(number);
        int len = numStr.length();

        if (len % 2 != 0) return false;

        int halfLen = len / 2;
        long lower = (long) Math.pow(10, halfLen - 1);
        long upper = (long) Math.pow(10, halfLen);

        for (long x = lower; x < upper; x++) {
            if (number % x != 0) continue;
            long y = number / x;

            if (y < lower || y >= upper) continue;

            // Exclude both factors ending in zero
            if (x % 10 == 0 && y % 10 == 0) continue;

            String combined = x + "" + y;
            char[] originalDigits = numStr.toCharArray();
            char[] combinedDigits = combined.toCharArray();

            java.util.Arrays.sort(originalDigits);
            java.util.Arrays.sort(combinedDigits);

            if (java.util.Arrays.equals(originalDigits, combinedDigits)) {
                return true;
            }
        }
        return false;
    }
}
