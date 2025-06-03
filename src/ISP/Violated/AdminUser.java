package ISP.Violated;

public class AdminUser implements UserOperations {
    @Override
    public void login() {
        System.out.println("Admin logged in.");
    }

    @Override
    public void accessAdminPanel() {
        System.out.println("Admin accessing panel.");
    }

    @Override
    public void generateReport() {
        System.out.println("Admin generating report.");
    }
}