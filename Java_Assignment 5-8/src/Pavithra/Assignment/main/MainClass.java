package Pavithra.Assignment.main;



import Pavithra.Assignment.data.DefaultInitialization;
import Pavithra.Assignment.singleton.SingletonExample;

public class MainClass {
    public static void main(String[] args) {
        // First class: DefaultInitializationAssignment
        DefaultInitialization obj = new DefaultInitialization();
        obj.printMemberVariables();
        obj.printLocalVariables();

        // Second class: SingletonExample
        SingletonExample singleton = SingletonExample.initialize("Hello from Singleton!");
        singleton.printMessage();
    }
}
