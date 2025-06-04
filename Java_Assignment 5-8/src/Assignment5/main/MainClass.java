package Assignment5.main;

import Assignment5.data.DefaultInitialization;
import Assignment5.singleton.SingletonExample;

public class MainClass {
    public static void main(String[] args) {
        DefaultInitialization obj = new DefaultInitialization();
        obj.printMemberVariables();
        obj.printLocalVariables(); // will not print anything

        SingletonExample singleton = SingletonExample.initialize("Hello Singleton");
        singleton.print();
    }
}