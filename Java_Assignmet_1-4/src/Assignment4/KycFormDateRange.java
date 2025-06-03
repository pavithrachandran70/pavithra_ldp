package Assignment4;

import java.time.*;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;

public class KycFormDateRange {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = Integer.parseInt(sc.nextLine());

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");

        for (int i = 0; i < n; i++) {
            String[] dates = sc.nextLine().split(" ");
            LocalDate signUpDate = LocalDate.parse(dates[0], formatter);
            LocalDate currentDate = LocalDate.parse(dates[1], formatter);


            if (signUpDate.isAfter(currentDate)) {
                System.out.println("No range");
                continue;
            }
            LocalDate anniversary = signUpDate.withYear(currentDate.getYear());


            if (anniversary.isAfter(currentDate)) {
                anniversary = anniversary.minusYears(1);
            }

            LocalDate startWindow = anniversary.minusDays(30);
            LocalDate endWindow = anniversary.plusDays(30);


            if (endWindow.isAfter(currentDate)) {
                endWindow = currentDate;
            }


            if (startWindow.isAfter(currentDate)) {
                System.out.println("No range");
            } else {
                System.out.println(startWindow.format(formatter) + " " + endWindow.format(formatter));
            }
        }

        sc.close();
    }
}
