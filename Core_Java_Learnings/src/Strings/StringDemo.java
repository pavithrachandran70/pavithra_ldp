package Strings;

public class StringDemo

 {
    public static void main(java.lang.String args[])
    {
        //String in Java
        String a="Tutor Joes";

        String b="Tutor Joes";
        System.out.println("A : "+a);
        System.out.println("B : "+b);

        System.out.println("A HashCode "+a.hashCode());// Returns the hash code (an int) for the string. Equal strings have the same hash code.
        System.out.println("B HashCode "+b.hashCode());
        System.out.println("Equals : "+a.equals(b));  //Compares two strings for content equality, case-sensitive.
        System.out.println("Equals Ignore Case: "+a.equalsIgnoreCase(b));  //Compares two strings ignoring case differences.
        System.out.println("Length: "+a.length()); //Returns the number of characters in the string.
        System.out.println("CharAt: "+a.charAt(0));  //Returns the character at the specified index (0-based).
        System.out.println("Uppercase: "+a.toUpperCase());   //Converts all characters of the string to uppercase.
        System.out.println("Lowercase: "+a.toLowerCase()); //Converts all characters of the string to lowercase.
        System.out.println("Replace: "+a.replace("Joes","Stanley"));// Replaces all occurrences of a substring with another.
        System.out.println("Contains : " + a.contains("Joes"));  // Returns true if the string contains the specified sequence of characters.

        System.out.println("Empty : " + a.isEmpty());  //Returns true if the string length is 0.
        System.out.println("EndWith : " + a.endsWith("es"));  // Checks if the string ends with the specified suffix.
        System.out.println("StartWith : " + a.startsWith("Tut"));  //Checks if the string starts with the specified prefix.
        System.out.println("Substring : " + a.substring(5)); // Returns substring from beginIndex to end.
        System.out.println("Substring : " + a.substring(0, 5));// Returns substring from beginIndex to endIndex - 1.
        char[] carray = a.toCharArray();//Converts the string into a character array.
        for(char c : carray){
            System.out.print(c+ "   ");
        }
        java.lang.String c=" Tutor ";
        System.out.println("Length: "+c.length());
        System.out.println("C:"+c);
        System.out.println("C Trim :"+c.trim());  //Removes leading and trailing whitespaces.
        System.out.println("C Trim Length:"+c.trim().length());

    }
}