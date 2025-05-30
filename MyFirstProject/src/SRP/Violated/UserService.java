package SRP.Violated;

public class UserService {
    public void registerUser(String email, String password) {
        // 1. Validate email
        if (!email.contains("@")) {
            throw new IllegalArgumentException("Invalid email address");
        }

        // 2. Save user to database
        System.out.println("Saving user: " + email);

        // 3. Send welcome email
        System.out.println("Sending welcome email to: " + email);
    }
}
