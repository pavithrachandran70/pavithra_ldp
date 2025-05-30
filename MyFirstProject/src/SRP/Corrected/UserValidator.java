package SRP.Corrected;

public class UserValidator {
    public void validate(String email) {
        if (!email.contains("@")) {
            throw new IllegalArgumentException("Invalid email address");
        }
    }
}
