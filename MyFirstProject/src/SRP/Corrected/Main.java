package SRP.Corrected;

public class Main {
    public static void main(String[] args) {
        UserService userService = new UserService();
        userService.registerUser("john@example.com", "password123"); // SRP respected
    }
}
