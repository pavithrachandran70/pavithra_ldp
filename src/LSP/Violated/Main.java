package LSP.Violated;

public class Main {
    public static void main(String[] args) {
        User admin = new AdminUser();
        User guest = new GuestUser();

        admin.accessAdminPanel();    //works
        guest.accessAdminPanel();   //run time exception, violates LSP
    }
}
