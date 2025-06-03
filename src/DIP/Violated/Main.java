package DIP.Violated;

public class Main {
    public static void main(String[] args) {
        UserService userService = new UserService();
        userService.registerUser("Alice");
    }
}

//problem

//UserService (high-level) is tightly coupled to EmailService (low-level).

//Can't easily replace EmailService with SMS, push notification, etc.

//Hard to test, extend, or mock in the future.