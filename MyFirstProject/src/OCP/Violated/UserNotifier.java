package OCP.Violated;

public class UserNotifier {
    public void notifyUser(String type, String message) {
        if (type.equalsIgnoreCase("email")) {
            System.out.println("Sending Email: " + message);
        } else if (type.equalsIgnoreCase("sms")) {
            System.out.println("Sending SMS: " + message);
        } else {
            System.out.println("Unknown notification type");
        }
    }
}
