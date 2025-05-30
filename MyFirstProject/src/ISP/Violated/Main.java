package ISP.Violated;

public class Main {
    public static void main(String[] args) {
        UserOperations guest = new GuestUser();
        guest.login();
        // guest.accessAdminPanel(); // Causes runtime error
    }
}
