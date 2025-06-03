package SRP.Corrected;

public class UserService {
    private UserValidator validator = new UserValidator();
    private UserRepository repository = new UserRepository();
    private EmailService emailService = new EmailService();

    //Coordinates the registration process by calling the correct classes.
    //if validation/email/database logic changes, we update only the specific class.
    public void registerUser(String email, String password) {
        validator.validate(email);
        repository.save(email, password);
        emailService.sendWelcomeEmail(email);
    }

}
