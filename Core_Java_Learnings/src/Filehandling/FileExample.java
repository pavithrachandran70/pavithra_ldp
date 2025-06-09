package Filehandling;

import java.io.File;

public class FileExample {
    public static void main(String[] args) {
        File file = new File("example.txt");

        // Check if file exists
        if (file.exists()) {
            System.out.println("File exists.");
            System.out.println("File name: " + file.getName());
            System.out.println("Absolute path: " + file.getAbsolutePath());
            System.out.println("Writable: " + file.canWrite());
            System.out.println("Readable: " + file.canRead());
            System.out.println("File size (bytes): " + file.length());
        } else {
            System.out.println("File does not exist. Creating new file...");
            try {
                boolean created = file.createNewFile(); // Creates file if not exists
                if (created) System.out.println("File created successfully.");
            } catch (Exception e) {
                System.out.println("Error creating file.");
                e.printStackTrace();
            }
        }
    }
}
