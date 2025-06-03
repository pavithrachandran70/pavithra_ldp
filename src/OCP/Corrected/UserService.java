package OCP.Corrected;


//UserService depends on the Notifier interface, not a specific implementation.
public class UserService {
    private final Notifier notifier;

    //Constructor injection means passing required dependencies (like Notifier) into a class via its constructor.
    public UserService(Notifier notifier) {
        this.notifier = notifier;
    }

    public void registerUser(String username) {
        System.out.println("User registered: " + username);
        notifier.notifyUser("Welcome " + username);
    }
}
