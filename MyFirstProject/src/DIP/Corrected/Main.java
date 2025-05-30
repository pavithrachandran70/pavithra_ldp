package DIP.Corrected;

public class Main {
    public static void main(String[] args) {
        NotificationService emailService = new EmailService();
        UserService userService = new UserService(emailService);
        userService.registerUser("Alice");
    }
}



//DIP is about inverting the dependency direction — both high- and low-level modules should depend on abstractions.
//
//In the violated version, UserService directly creates and uses EmailService, creating a tight coupling.
//
//This makes it hard to swap, test, or extend notification behavior.
//
//In the corrected version, UserService depends on NotificationService (an interface).
//
//Now we can easily inject different implementations (Email, SMS, Push, Mock), following DIP.