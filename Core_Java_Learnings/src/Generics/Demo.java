package Generics;



// Generic class
// A generic class with type parameter T. T can be replaced with any type
class Box<T> {
    private T item;

    public void setItem(T item) {
        this.item = item;
    }

    public T getItem() {
        return item;
    }
}


public class Demo {

    public static void main(String[] args) {
        // Box to hold Integer
        //Java generics only work with reference types.
        // You need to use wrapper classes like Integer instead of int.
        Box<Integer> intBox = new Box<>();
        intBox.setItem(100);
        System.out.println("Integer Value: " + intBox.getItem());

        // Box to hold String
        Box<String> strBox = new Box<>();
        strBox.setItem("Hello Generics");
        System.out.println("String Value: " + strBox.getItem());
    }

}
