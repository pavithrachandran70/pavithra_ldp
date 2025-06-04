package Assignment7;

abstract class Rodent {
    Rodent() {
        System.out.println("A Rodent is created.");
    }

    abstract void eat();
    abstract void run();
}

class Mouse extends Rodent {
    Mouse() {
        System.out.println("A Mouse is created.");
    }

    void eat() {
        System.out.println("Mouse eats cheese.");
    }

    void run() {
        System.out.println("Mouse runs quickly.");
    }
}

class Gerbil extends Rodent {
    Gerbil() {
        System.out.println("A Gerbil is created.");
    }

    void eat() {
        System.out.println("Gerbil eats grains.");
    }

    void run() {
        System.out.println("Gerbil runs around in circles.");
    }
}

class Hamster extends Rodent {
    Hamster() {
        System.out.println("A Hamster is created.");
    }

    void eat() {
        System.out.println("Hamster eats seeds.");
    }

    void run() {
        System.out.println("Hamster runs on a wheel.");
    }
}

public class RodentTest {
    public static void main(String[] args) {
        Rodent[] rodents = { new Mouse(), new Gerbil(), new Hamster() };

        for (Rodent r : rodents) {
            r.eat();
            r.run();
            System.out.println();
        }
    }
}

