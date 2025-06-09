package Oops.Polymorphism.MethodOverloading;

public class Demo {
    public int add(int a, int b) {
        return a + b;
    }

    // Method to add three integers
    public int add(int a, int b, int c) {
        return a + b + c;
    }

    // Method to add two doubles
    public double add(double a, double b) {
        return a + b;
    }

    public static void main(String[] args) {
        Demo calc = new Demo();
        System.out.println(calc.add(2, 3));           // 5
        System.out.println(calc.add(2, 3, 4));        // 9
        System.out.println(calc.add(2.5, 3.5));       // 6.0
    }
}
