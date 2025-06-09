package Iterator;
import java.util.*;
public class Demo {
    public static void main(String[] args) {
        //Creates a new ArrayList of type String.
        List<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");
        //Creates an Iterator object named it to iterate over the elements of the list.
        //list.iterator() returns an iterator for the list.
        Iterator<String> it = list.iterator();
        //it.hasNext() checks if there's another element to visit.
        while(it.hasNext()) {
            //Retrieves the next element in the list using it.next() and prints it to the console.
            System.out.println(it.next());
        }
    }
}
