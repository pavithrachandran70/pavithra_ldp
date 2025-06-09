package Constructor;

public class ConstructorOverloading {
    private String username;
    private String email;
    private String profilePicUrl;

    // Constructor 1: Only username
    public ConstructorOverloading(String username) {
        this.username = username;
        this.email = "Not provided";
        this.profilePicUrl = "default.jpg";
    }

    // Constructor 2: Username and email
    public ConstructorOverloading(String username, String email) {
        this.username = username;
        this.email = email;
        this.profilePicUrl = "default.jpg";
    }

    // Constructor 3: Username, email, and profile picture URL
    public ConstructorOverloading(String username, String email, String profilePicUrl) {
        this.username = username;
        this.email = email;
        this.profilePicUrl = profilePicUrl;
    }

    public void displayInfo() {
        System.out.println("Username: " + username);
        System.out.println("Email: " + email);
        System.out.println("Profile Picture URL: " + profilePicUrl);
    }

    public static void main(String[] args) {
        ConstructorOverloading user1 = new ConstructorOverloading("alice");
        ConstructorOverloading user2 = new ConstructorOverloading("bob", "bob@example.com");
        ConstructorOverloading user3 = new ConstructorOverloading("charlie", "charlie@example.com", "charliePic.jpg");

        user1.displayInfo();
        System.out.println();
        user2.displayInfo();
        System.out.println();
        user3.displayInfo();
    }
}

