package Constructor;



class Student {
    String name;
    int age;

    // Default Constructor
    Student() {
        name = "Unknown";
        age = 0;
    }

    // Parameterized Constructor
    Student(String studentName, int studentAge) {
        name = studentName;
        age = studentAge;
    }

    void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}
public class Demo {
    public static void main(String[] args) {
        // Using Default Constructor
        Student student1 = new Student();
        student1.displayInfo();  // Output: Name: Unknown, Age: 0

        // Using Parameterized Constructor
        Student student2 = new Student("Alice", 20);
        student2.displayInfo();  // Output: Name: Alice, Age: 20
    }
}
