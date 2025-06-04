package Assignment7;

class Outer {
    class Inner {
        Inner(String message) {
            System.out.println("Inner constructor: " + message);
        }
    }
}

class SecondOuter {
    class SecondInner extends Outer.Inner {
        SecondInner(Outer outer, String message) {
            outer.super(message);
            System.out.println("SecondInner constructor.");
        }
    }
}

public class InnerClassTest {
    public static void main(String[] args) {
        Outer outer = new Outer();
        SecondOuter.SecondInner inner = new SecondOuter().new SecondInner(outer, "Hello from Inner");
    }
}

