package AccessModifiers;

public class ClassA {
    public int publicVar = 10;
    protected int protectedVar = 20;
    int defaultVar = 30; // default access (no modifier)
    private int privateVar = 40;

    public void showAll() {
        System.out.println("Inside AccessModifiers class:");
        System.out.println("publicVar = " + publicVar);
        System.out.println("protectedVar = " + protectedVar);
        System.out.println("defaultVar = " + defaultVar);
        System.out.println("privateVar = " + privateVar);
    }
}
