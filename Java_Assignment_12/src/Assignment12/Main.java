package Assignment12;

import Assignment12.Student;
import Assignment12.StudentService;
import Assignment12.StudentData;

import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Student> students = StudentData.getStudents();
        StudentService service = new StudentService();

        System.out.println("1. All Departments:");
        service.printAllDepartments(students);

        System.out.println("\n2. Students Enrolled After 2018:");
        service.getStudentsEnrolledAfter(students, 2018).forEach(System.out::println);

        System.out.println("\n3. Male Students in Computer Science:");
        service.getMaleStudentsInCS(students).forEach(System.out::println);

        System.out.println("\n4. Gender Count:");
        System.out.println(service.countByGender(students));

        System.out.println("\n5. Average Age by Gender:");
        System.out.println(service.avgAgeByGender(students));

        System.out.println("\n6. Topper:");
        System.out.println(service.getTopper(students).orElse(null));

        System.out.println("\n7. Students Count by Department:");
        System.out.println(service.countStudentsByDept(students));

        System.out.println("\n8. Average Percentage by Department:");
        System.out.println(service.avgPercentageByDept(students));

        System.out.println("\n9. Youngest Male in Electronic:");
        System.out.println(service.getYoungestMaleInElectronic(students).orElse(null));

        System.out.println("\n10. Gender Count in CS:");
        System.out.println(service.countGenderInCS(students));
    }
}
