package Assignment3;


import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class PingMedianCalculator {


    public static double pingAndCalculateMedian(String host, int count) {
        List<Double> times = new ArrayList<>();
        String os = System.getProperty("os.name").toLowerCase();
        String pingCommand;

        if (os.contains("win")) {

            pingCommand = String.format("ping -n %d %s", count, host);
        } else {

            pingCommand = String.format("ping -c %d %s", count, host);
        }

        try {

            ProcessBuilder builder = new ProcessBuilder(pingCommand.split(" "));
            Process process = builder.start();


            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;

            while ((line = reader.readLine()) != null) {

                if (line.contains("time=")) {

                    String[] parts = line.split("time=");
                    if (parts.length > 1) {

                        String timePart = parts[1].split(" ")[0].replace("ms", "").trim();
                        try {

                            double time = Double.parseDouble(timePart);
                            times.add(time);
                        } catch (NumberFormatException e) {

                        }
                    }
                }
            }

            process.waitFor();

        } catch (Exception e) {
            System.err.println("Error running ping: " + e.getMessage());
            return -1;
        }

        if (times.isEmpty()) {
            System.err.println("No valid ping times found.");
            return -1;
        }


        Collections.sort(times);

        int n = times.size();
        if (n % 2 == 1) {

            return times.get(n / 2);
        } else {

            return (times.get(n / 2 - 1) + times.get(n / 2)) / 2.0;
        }
    }

    public static void main(String[] args) {

         Scanner sc = new Scanner(System.in);

    System.out.print("Enter hostname (e.g., google.com): ");
    String host = sc.nextLine();

    System.out.print("Enter number of pings: ");
    int count = sc.nextInt();

    double median = pingAndCalculateMedian(host, count);
    if (median >= 0) {
        System.out.printf("Median ping time to %s is %.2f ms%n", host, median);
    }

    sc.close();
        

    }
}
