package OCP.Corrected;

public class SMSNotifier implements Notifier {
    public void notifyUser(String message) {
        System.out.println("Sending SMS: " + message);
    }
}
