package AccessModifiers.Different;


import AccessModifiers.ClassA;

public class SubClass extends ClassA {
    public static void main(String[] args) {
        SubClass obj = new SubClass();
        System.out.println("Access from SubClass in different package:");
        System.out.println("publicVar = " + obj.publicVar);
        System.out.println("protectedVar = " + obj.protectedVar); // accessible via inheritance
        // System.out.println("defaultVar = " + obj.defaultVar); // Error: default not visible
        // System.out.println("privateVar = " + obj.privateVar); //  Error: private not visible
    }
}
