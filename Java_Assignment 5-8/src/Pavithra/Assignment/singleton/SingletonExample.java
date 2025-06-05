package Pavithra.Assignment.singleton;

public class SingletonExample {
    // Non-static member variable
    private String value;

    //Static method to create instance
    public static SingletonExample initialize(String val) {
        SingletonExample instance = new SingletonExample();
        instance.value = val;
        return instance;
    }

    public void printMessage() {
        System.out.println("String value: " + value);
    }
}
