package FunctionalInterface;

@FunctionalInterface
interface Greeting {
    void say(String name);
}

public class Example {
    public static void main(String[] args) {
        Greeting g = (name) -> System.out.println("Hello, " + name);
        g.say("Alice");
    }
}
