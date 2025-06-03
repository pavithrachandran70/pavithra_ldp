package OCP.Corrected;

public class EmailNotifier implements Notifier {
    public void notifyUser(String message) {
        System.out.println("Sending Email: " + message);
    }
}

//Now each notifier implements the Notifier interface. This means we can add new types of notifiers
// without changing existing code.