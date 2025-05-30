package OCP.Violated;

public class UserService {
    private UserNotifier notifier = new UserNotifier();

    public void registerUser(String username) {
        System.out.println("User registered: " + username);
        notifier.notifyUser("email", "Welcome " + username);
    }
}
