package Oops.Polymorphism.MethoOverriding;



class Animal {
    public void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    public void sound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    @Override
    public void sound() {
        System.out.println("Cat meows");
    }
}

public class Demo {
    public static void main(String[] args) {
        Animal myDog = new Dog();    // Upcasting
        Animal myCat = new Cat();

        myDog.sound();  // Dog barks
        myCat.sound();  // Cat meows
    }
}
