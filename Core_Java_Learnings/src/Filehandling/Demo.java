package Filehandling;

import java.io.FileWriter;
import java.io.IOException;

public class Demo {
    public static void main(String[] args) {
        String fileName = "example.txt";
        String content = "This is the content written to the file.";

        try {
            FileWriter writer = new FileWriter("example.txt");
            writer.write(content);
            writer.close();
            System.out.println("File written successfully.");
        } catch (IOException e) {
            System.out.println("An error occurred while writing to the file.");
            e.printStackTrace();
        }
    }
}
