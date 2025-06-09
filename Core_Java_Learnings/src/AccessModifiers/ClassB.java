package AccessModifiers;

public class ClassB {
    public static void main(String[] args) {
        ClassA obj = new ClassA();
        System.out.println("Access from SamePackageClass:");
        System.out.println("publicVar = " + obj.publicVar);
        System.out.println("protectedVar = " + obj.protectedVar);
        System.out.println("defaultVar = " + obj.defaultVar);
        // System.out.println("privateVar = " + obj.privateVar);
    }
}
