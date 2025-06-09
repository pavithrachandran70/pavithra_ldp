package Loops;

public class Example {

    public static void main(String[] args) {
        //FOR LOOP
        for (int i = 1; i <= 5; i++) {
            System.out.println("i = " + i);
        }


        //WHILE LOOP
        int k = 1;
        while (k <= 5) {
            System.out.println("k = " + k);
            k++;
        }


        //DO-WHILE LOOP
        int j = 1;
        do {
            System.out.println("j = " + j);
            j++;
        } while (j <= 5);


        //ENHANCED FOR LOOP(FOR-EACH)
        int[] numbers = {10, 20, 30, 40};
        for (int num : numbers) {
            System.out.println("Number: " + num);
        }

    }

}
