package WrapperClasses;

public class Demo {
    public static void main(String[] args) {
        // Primitive data type
        int num = 10;

        // Converting primitive to Wrapper object (Boxing)
        Integer wrappedNum = Integer.valueOf(num);

        // Auto-boxing (Java automatically converts primitive to wrapper)
        Integer autoBoxed = num;

        // Converting Wrapper to primitive (Unboxing)
        int unboxed = wrappedNum.intValue();

        // Auto-unboxing (Java automatically converts wrapper to primitive)
        int autoUnboxed = autoBoxed;

        // Output
        System.out.println("Primitive: " + num);
        System.out.println("Wrapped (Boxed): " + wrappedNum);
        System.out.println("Auto-boxed: " + autoBoxed);
        System.out.println("Unboxed: " + unboxed);
        System.out.println("Auto-unboxed: " + autoUnboxed);
    }
}
