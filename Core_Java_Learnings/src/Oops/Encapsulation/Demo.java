package Oops.Encapsulation;

public class Demo {

    // Class with private fields and public getters/setters
    static class Person {
        private String name;
        private int age;

        // Getter for name
        public String getName() {
            return name;
        }

        // Setter for name
        public void setName(String name) {
            this.name = name;
        }

        // Getter for age
        public int getAge() {
            return age;
        }

        // Setter for age
        public void setAge(int age) {
            if (age > 0) {
                this.age = age;
            } else {
                System.out.println("Invalid age!");
            }
        }
    }

    // Main method to run the program
    public static void main(String[] args) {
        Person person = new Person();

        // Set values using setters
        person.setName("Alice");
        person.setAge(25);

        // Get values using getters
        System.out.println("Name: " + person.getName());
        System.out.println("Age: " + person.getAge());

        // Try setting an invalid age
        person.setAge(-5); // This will trigger a validation message
    }
}
