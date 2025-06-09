package Assignment12;



import Assignment12.Student;

import java.util.*;
import java.util.stream.Collectors;

public class StudentService {


    //1.printAllDepartments()
    public void printAllDepartments(List<Student> students) {
        students.stream()
                //Extract department names.
                .map(Student::getEngDepartment)
                //Remove duplicates.
                .distinct()
                //Print each department.
                .forEach(System.out::println);
    }


    //2.getStudentsEnrolledAfter()
    // Get names of students who enrolled after the given year.
    public List<String> getStudentsEnrolledAfter(List<Student> students, int year) {
        return students.stream()
                .filter(s -> s.getYearOfEnrollment() > year)
                .map(Student::getName)
                .collect(Collectors.toList());
    }


    //3.getMaleStudentsInCS()
    //Get all male students in the Computer Science department.
    public List<Student> getMaleStudentsInCS(List<Student> students) {
        return students.stream()
                .filter(s -> s.getGender().equalsIgnoreCase("Male"))
                .filter(s -> s.getEngDepartment().equalsIgnoreCase("Computer Science"))
                .collect(Collectors.toList());
    }

    //4.countByGender()
    // Count how many males and females there are.
    public Map<String, Long> countByGender(List<Student> students) {
        return students.stream()
                .collect(Collectors.groupingBy(Student::getGender, Collectors.counting()));
    }


    //5.avgAgeByGender()
    // Calculate average age of male and female students.
    public Map<String, Double> avgAgeByGender(List<Student> students) {
        return students.stream()
                .collect(Collectors.groupingBy(Student::getGender, Collectors.averagingInt(Student::getAge)));
    }

    //6.getTopper()
    //Get the student with the highest percentage.
    public Optional<Student> getTopper(List<Student> students) {
        return students.stream()
                .max(Comparator.comparingDouble(Student::getPerTillDate));
    }

    //7.countStudentsByDept()
    // Count how many students are in each department
    public Map<String, Long> countStudentsByDept(List<Student> students) {
        return students.stream()
                .collect(Collectors.groupingBy(Student::getEngDepartment, Collectors.counting()));
    }

    //8.avgPercentageByDept()
    //Find average percentage in each department.
    public Map<String, Double> avgPercentageByDept(List<Student> students) {
        return students.stream()
                .collect(Collectors.groupingBy(Student::getEngDepartment, Collectors.averagingDouble(Student::getPerTillDate)));
    }

    //9.getYoungestMaleInElectronic()
    //Find the youngest male student in Electronic dept.
    public Optional<Student> getYoungestMaleInElectronic(List<Student> students) {
        return students.stream()
                .filter(s -> s.getGender().equalsIgnoreCase("Male"))
                .filter(s -> s.getEngDepartment().equalsIgnoreCase("Electronic"))
                .min(Comparator.comparingInt(Student::getAge));
    }

    //10.countGenderInCS()
    //Count male and female students in Computer Science department.

    public Map<String, Long> countGenderInCS(List<Student> students) {
        return students.stream()
                .filter(s -> s.getEngDepartment().equalsIgnoreCase("Computer Science"))
                .collect(Collectors.groupingBy(Student::getGender, Collectors.counting()));
    }
}
