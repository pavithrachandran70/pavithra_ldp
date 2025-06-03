package Assignment1;


import java.io.File;
import java.util.Scanner;
import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class RegexFileSearch {


    public static void searchFiles(File dir, Pattern pattern) {
        if (dir == null || !dir.exists()) return;

        File[] files = dir.listFiles();
        if (files == null) return;

        for (File file : files) {
            if (file.isDirectory()) {
                searchFiles(file, pattern);
            } else {
                Matcher matcher = pattern.matcher(file.getName());
                if (matcher.matches()) {
                    System.out.println(file.getAbsolutePath());
                }
            }
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String homeDir = System.getProperty("user.home");
        File home = new File(homeDir);

        System.out.println("Welcome to Regex File Search!");
        System.out.println("Type 'exit' to quit the program.");

        while (true) {
            System.out.print("\nEnter a regex to search files: ");
            String input = scanner.nextLine();

            if (input.equalsIgnoreCase("exit")) {
                System.out.println("Exiting program.");
                break;
            }

            try {
                Pattern pattern = Pattern.compile(input);
                System.out.println("Searching for files matching: " + input);
                searchFiles(home, pattern);
            } catch (Exception e) {
                System.out.println("Invalid regex pattern. Try again.");
            }
        }

        scanner.close();
    }
}