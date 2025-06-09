package Strings;

public class StringBuffer {
    public static void main(StringDemo args[])
    {
        //StringBuffer & StringBuilder in Java

        StringBuilder buffer =new StringBuilder("Tutor");
        System.out.println(buffer);
        buffer.append(" Joes");// Appends the specified string to the end.
        System.out.println(buffer);
        buffer.insert(10," Computer"); //Inserts the string at the specified position.


        System.out.println(buffer);
        buffer.replace(9,11,"@@@");//Replaces characters from start to end - 1 with the specified string.
        System.out.println(buffer);
        buffer.delete(9,11);// Deletes characters from start to end - 1.

        System.out.println(buffer);
        buffer.reverse();//Reverses the characters in the sequence.



        System.out.println(buffer);
        System.out.println(buffer.charAt(2));//Returns the character at the specified index.
        System.out.println(buffer.length());//Returns the number of characters in the buffer.


        System.out.println(buffer.substring(0));//Returns a new string starting from the given index to the end.
        System.out.println(buffer.substring(0,5));// Returns a new string from start to end - 1.
        buffer.setCharAt(0,'@');//Sets the character at the specified index.
        System.out.println(buffer);










    }


}
