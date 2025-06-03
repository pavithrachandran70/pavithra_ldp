package LSP.Violated;

public class GuestUser extends User {
    @Override
    //This violates the Liskov Substitution Principle because not all subclasses behave like their parent.
    public void accessAdminPanel() {
        throw new UnsupportedOperationException("Guest cannot access admin panel.");
    }
}

