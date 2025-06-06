package Assignment11;


import java.io.*;
import java.util.*;

public class CharCounter {
    public static void main(String[] args) {
        if (args.length != 1) {
            System.out.println("Usage: java CharCounter <filename>");
            return;
        }

        String inputFileName = args[0];
        //You create a map to store each character
        // and the number of times it appears in the file.
        Map<Character, Integer> charCountMap = new HashMap<>();

        try (BufferedReader reader = new BufferedReader(new FileReader("input.txt"))) {
            int ch;
            //You read the file character by character.
            //
            //Each character is stored in the map, and its count is updated.
            while ((ch = reader.read()) != -1) {
                char character = (char) ch;
                //This updates the character frequency map.
                //
                //charCountMap.getOrDefault(character, 0):
                //
                //If the character is already in the map, it returns its current count.
                //
                //If the character is not in the map, it returns 0.
                //
                //Then, +1 increments the count by 1.
                //
                //put() stores the updated count back in the map.
                charCountMap.put(character, charCountMap.getOrDefault(character, 0) + 1);
            }
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
            return;
        }

        try (BufferedWriter writer = new BufferedWriter(new FileWriter("Example.txt"))) {
            //Map.Entry<Character, Integer> represents a key-value pair:
            //
            //entry.getKey() → the character.
            //
            //entry.getValue() → the number of times it appeared.
            for (Map.Entry<Character, Integer> entry : charCountMap.entrySet()) {
                writer.write("'" + entry.getKey() + "': " + entry.getValue());
                writer.newLine();

            }
            System.out.println("Character counts written to char_counts.txt");
        } catch (IOException e) {
            System.out.println("Error writing to output file: " + e.getMessage());
        }
    }
}
