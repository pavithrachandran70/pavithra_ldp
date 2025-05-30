package ISP.Corrected;

public class GuestUser implements Loginable {
    @Override
    public void login() {
        System.out.println("Guest logged in.");
    }
}