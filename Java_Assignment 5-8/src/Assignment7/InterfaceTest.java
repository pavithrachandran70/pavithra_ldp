package Assignment7;

interface A {
    void methodA1();
    void methodA2();
}

interface B {
    void methodB1();
    void methodB2();
}

interface C {
    void methodC1();
    void methodC2();
}

interface D extends A, B, C {
    void methodD();
}

class Concrete {
    void baseMethod() {
        System.out.println("Concrete class method.");
    }
}

class AllInOne extends Concrete implements D {
    public void methodA1() { System.out.println("methodA1"); }
    public void methodA2() { System.out.println("methodA2"); }
    public void methodB1() { System.out.println("methodB1"); }
    public void methodB2() { System.out.println("methodB2"); }
    public void methodC1() { System.out.println("methodC1"); }
    public void methodC2() { System.out.println("methodC2"); }
    public void methodD() { System.out.println("methodD"); }
}

public class InterfaceTest {
    static void takeA(A a) { a.methodA1(); a.methodA2(); }
    static void takeB(B b) { b.methodB1(); b.methodB2(); }
    static void takeC(C c) { c.methodC1(); c.methodC2(); }
    static void takeD(D d) { d.methodD(); }

    public static void main(String[] args) {
        AllInOne obj = new AllInOne();
        takeA(obj);
        takeB(obj);
        takeC(obj);
        takeD(obj);
    }
}

