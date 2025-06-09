package Assignment12;


public class Student {
    private int id;
    private String name;
    private int age;
    private String gender;
    private String engDepartment;
    private int yearOfEnrollment;
    private double perTillDate;

     //contsructor
    public Student(int id, String name, int age, String gender, String engDepartment, int yearOfEnrollment, double perTillDate) {
        //this keyword refers to the current object instance.
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.engDepartment = engDepartment;
        this.yearOfEnrollment = yearOfEnrollment;
        this.perTillDate = perTillDate;
    }

    // Getters
    public int getId() { return id; }
    public String getName() { return name; }
    public int getAge() { return age; }
    public String getGender() { return gender; }
    public String getEngDepartment() { return engDepartment; }
    public int getYearOfEnrollment() { return yearOfEnrollment; }
    public double getPerTillDate() { return perTillDate; }


    @Override
    //A method that returns how the object should be printed
    public String toString() {
        return String.format("Student{id=%d, name='%s', age=%d, gender='%s', dept='%s', year=%d, percentage=%.2f}",
                id, name, age, gender, engDepartment, yearOfEnrollment, perTillDate);
    }
}

