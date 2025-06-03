package LSP.Corrected;

public class Main {
    public static void main(String[] args) {
        BaseUser guest = new GuestUser();
        AdminUser admin = new AdminUser();

        guest.login();
        admin.login();

        // Only call admin panel if it's an AdminUser
        admin.accessAdminPanel();

    }
}
