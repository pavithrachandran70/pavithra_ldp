package Assignment6;

public class OverloadConstructor {
    OverloadConstructor() {
        this("Called from default constructor");
        System.out.println("Inside default constructor");
    }

    OverloadConstructor(String message) {
        System.out.println("Inside overloaded constructor: " + message);
    }

    public static void main(String[] args) {
        OverloadConstructor obj = new OverloadConstructor();
    }
}
