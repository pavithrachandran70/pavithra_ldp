package DIP.Violated;

public class UserService {
    private EmailService emailService = new EmailService();

    public void registerUser(String username) {
        System.out.println("User registered: " + username);
        emailService.sendEmail("Welcome " + username);
    }
}
