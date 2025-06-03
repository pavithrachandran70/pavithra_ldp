package OCP.Corrected;

public class Main {
    public static void main(String[] args) {
        Notifier emailNotifier = new EmailNotifier();
        Notifier smsNotifier = new SMSNotifier();

        UserService emailService = new UserService(emailNotifier);
        emailService.registerUser("alice");

        UserService smsService = new UserService(smsNotifier);
        smsService.registerUser("bob");
    }
}

//Easily switch between different notifiers without changing UserService.

//New notification types can be added by creating a new class that implements Notifier.