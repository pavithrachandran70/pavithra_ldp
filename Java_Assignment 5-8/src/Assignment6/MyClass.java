package Assignment6;
class MyClass {
    MyClass(String message) {
        System.out.println("Constructor called with message: " + message);
    }

    public static void main(String[] args) {
        MyClass[] arr = new MyClass[5];

        for (int i = 0; i < arr.length; i++) {
            arr[i] = new MyClass("Object " + (i + 1));
        }
    }
}
