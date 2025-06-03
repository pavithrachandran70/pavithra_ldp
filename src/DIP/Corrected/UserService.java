package DIP.Corrected;

public class UserService {
    private NotificationService notificationService;

    public UserService(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    public void registerUser(String username) {
        System.out.println("User registered: " + username);
        notificationService.send("Welcome " + username);
    }
}


//UserService depends on the abstraction (NotificationService), not on EmailService directly.
//
//The constructor takes a NotificationService, allowing any class that implements the interface to be injected.
//
//This is called Dependency Injection, which supports DIP by decoupling dependencies.