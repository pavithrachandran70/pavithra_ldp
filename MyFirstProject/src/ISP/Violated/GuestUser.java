package ISP.Violated;

public class GuestUser implements UserOperations {
    @Override
    public void login() {
        System.out.println("Guest logged in.");
    }

    @Override
    public void accessAdminPanel() {
        // Not needed by Guest
        throw new UnsupportedOperationException("Guest cannot access admin panel.");
    }

    @Override
    public void generateReport() {
        // Not needed by Guest
        throw new UnsupportedOperationException("Guest cannot generate reports.");
    }
}


//GuestUser is forced to implement accessAdminPanel() and generateReport(), which it doesn't use.

//This violates ISP by forcing clients (GuestUser) to depend on unused functionalities.