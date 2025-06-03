package ISP.Corrected;

public class Main {
    public static void main(String[] args) {
        Loginable guest = new GuestUser();
        Loginable admin = new AdminUser();

        guest.login();
        admin.login();

        if (admin instanceof AdminPanelAccess) {
            ((AdminPanelAccess) admin).accessAdminPanel();
        }
    }
}


//ISP is about interface cleanliness — clients (classes) shouldn’t be forced to depend on or implement methods they don’t need.
//
//In the violated version, GuestUser was forced to implement methods like generateReport() and accessAdminPanel(), which it doesn’t use.
//
//This leads to bad design and possible runtime exceptions.
//
//The corrected version splits the big interface into smaller, role-based interfaces, so each class only takes what it needs.
//
//This improves modularity, testability, and extensibility of the code.